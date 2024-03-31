'use client';

import { useTexture, shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { useSlider } from './useSlider';
import * as THREE from 'three';
import { MathUtils } from 'three/src/math/MathUtils.js';
import { MirroredRepeatWrapping } from 'three';
import { useSpring } from 'framer-motion';

const PUSH_FORCE = 1.4;

const ImageSliderMaterial = shaderMaterial(
  {
    uProgression: 1.0,
    uTexture: new THREE.Uniform(),
    uPrevTexture: new THREE.Uniform(),
    utime: 0.0,
    uDirection: 1.0,
    uPushForce: PUSH_FORCE,
    uMousePosition: [0, 0],
  },
  /*glsl*/ `
  varying vec2 vUv;
  uniform float utime;
  uniform vec2 uMousePosition;
  uniform float uPushForce;
  varying float vPushed;
  
  void main() {
    vUv = uv;
    vec2 centeredUv = (vUv - 0.5) * 2.0;
  float pushed = length(centeredUv - uMousePosition);

//change the value of 1.7 to increase or decrease the push effect
  
pushed = 1.0 - smoothstep(0.0, 1.7, pushed);
  pushed = -uPushForce * pushed;
    vPushed = pushed;
  vec3 dispPosition = position;
  dispPosition.z = pushed;

    vec4 modelPosition = modelMatrix * vec4(dispPosition, 1.0);
    modelPosition.y += sin(modelPosition.x * 1.0 + utime * 0.5) * 0.08;
    modelPosition.z += 1.0*sin(modelPosition.y * 27.0 + utime * 0.4) * 0.08;

    

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    
  }`,
  /*glsl*/ ` 
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform sampler2D uPrevTexture;
  uniform float uProgression;
  uniform float uDirection;
  varying float vPushed;


  float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u*u*(3.0-2.0*u);

  float res = mix(
    mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
  return res*res;
}


    float sdRoundedBox( in vec2 p, in vec2 b, in vec4 r )
{
  r.xy = (p.x>0.0)?r.xy : r.zw;
  r.x  = (p.y>0.0)?r.x  : r.y;
  vec2 q = abs(p)-b+r.x;
  return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
}

  void main() {
    vec2 uv = vUv;
    float noiseFactor = noise(gl_FragCoord.xy * 0.03);
    vec2 distortedPosition = vec2(uv.x - float(uDirection) * (1.0 - uProgression) * noiseFactor, uv.y);
    

    //GLITCH EFFECT
    //vec4 curTexture = texture2D(uTexture, distortedPosition);
    float curTextureR = texture2D(uTexture, distortedPosition + vec2(vPushed * 0.042)).r;
    float curTextureG = texture2D(uTexture, distortedPosition + vec2(vPushed * 0.022)).g;
    float curTextureB = texture2D(uTexture, distortedPosition + vec2(vPushed * -0.042)).b;
    float curTextureA = texture2D(uTexture, distortedPosition).a;
    vec4 curTexture = vec4(curTextureR, curTextureG, curTextureB, curTextureA);

    vec2 distortedPositionPrev = vec2(uv.x + float(uDirection) * uProgression * noiseFactor, uv.y);
    vec4 prevTexture = texture2D(uPrevTexture, distortedPositionPrev);
    
    vec4 finalTexture = mix(prevTexture, curTexture, uProgression);

//      vec2 centeredUv = (vUv - 0.5) * 2.0;
//   float frame = sdRoundedBox(centeredUv, vec2(1.0), vec4(0.2, 0.0, 0.0, 0.2));
//  frame = smoothstep(0.0, 0.002, -frame);
//    finalTexture.a *= frame;
          
    gl_FragColor = finalTexture;
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
    
  }`
);

extend({
  ImageSliderMaterial,
});

function ImageSlider() {
  const material = useRef();
  const mesh = useRef();
  const hovered = useRef(false);
  const { items, curSlide, direction } = useSlider();
  const image = items[curSlide].img;
  const texture = useTexture(image);
  const [lastImage, setLastImage] = useState(image);
  const prevTexture = useTexture(lastImage);

  texture.wrapS =
    texture.wrapT =
    prevTexture.wrapS =
    prevTexture.wrapT =
      MirroredRepeatWrapping;

  const [transition, setTransition] = useState(false);

  const progression = useSpring(0, { stiffness: 800, damping: 100, mass: 1 });

  useEffect(() => {
    const newImage = image;
    material.current.uProgression = 0;
    progression.setCurrent(0);
    progression.set(1.0);
    material.current.uMousePosition = [direction === 'prev' ? -1 : 1, 0];
    setTransition(true);
    const timeout = setTimeout(() => {
      setTransition(false);
    }, 1600);

    return () => {
      setLastImage(newImage);
      clearTimeout(timeout);
    };
  }, [image, direction, progression]);

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime();
    mesh.current.material.uniforms.utime.value = time;

    // material.current.uniforms.uProgression.value = MathUtils.lerp(
    //   material.current.uniforms.uProgression.value,
    //   1.0,
    //   0.05
    // );
    material.current.uProgression = progression.get();

    // material.current.uMousePosition = [
    //   MathUtils.lerp(material.current.uMousePosition[0], pointer.x, 0.05),
    //   MathUtils.lerp(material.current.uMousePosition[1], pointer.y, 0.05),
    // ];

    // material.current.uPushForce = MathUtils.lerp(
    //   material.current.uPushForce,
    //   hovered.current ? PUSH_FORCE : 0,
    //   0.03
    // );

    material.current.uMousePosition = [
      MathUtils.lerp(
        material.current.uMousePosition[0],
        transition
          ? (direction === 'prev' ? 1.0 : -1.0) * material.current.uProgression
          : pointer.x,
        0.05
      ),
      MathUtils.lerp(
        material.current.uMousePosition[1],
        transition ? -1.0 * material.current.uProgression : pointer.y,
        0.05
      ),
    ];
    // ...
    material.current.uPushForce = MathUtils.lerp(
      material.current.uPushForce,
      transition
        ? -PUSH_FORCE * -1.5 * Math.sin(material.current.uProgression * 3.14)
        : hovered.current
        ? PUSH_FORCE
        : 0,
      0.05
    );
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => (hovered.current = true)}
      onPointerOut={() => (hovered.current = false)}
    >
      <planeGeometry args={[13.5, 7.3, 32, 32]} />
      <imageSliderMaterial
        ref={material}
        uTexture={texture}
        uPrevTexture={prevTexture}
        utime={0.0}
        uDirection={direction === 'next' ? 1.0 : -1.0}
        transparent
      />
    </mesh>
  );
}

useSlider.getState().items.forEach((item) => {
  useTexture.preload(item.img);
});

export default ImageSlider;
