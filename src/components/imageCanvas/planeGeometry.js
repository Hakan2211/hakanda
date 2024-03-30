'use client';

import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useSlider } from './useSlider';
import { MathUtils } from 'three/src/math/MathUtils.js';

const fragmentShader = `  

uniform float utime;
uniform sampler2D utexture;
uniform sampler2D uPrevTexture;
uniform float uProgression;
varying vec2 vUv;
void main() {

    vec4 curTexture = texture2D(utexture, vUv);
    vec4 prevTexture = texture2D(uPrevTexture, vUv);
    vec4 finalTexture = mix(prevTexture, curTexture, uProgression);

  gl_FragColor = finalTexture;
}`;
const vertexShader = `
uniform float utime;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {

    vUv = uv;

    // vec3 p = position;
    // float maxDistance = 0.05;
    // float distance = length(uMouse - p);
    // if (distance < maxDistance) {
    //   vec3 direction = normalize(uMouse - p);
    //   direction*= (1.0 -distance/maxDistance);
    //   p -= direction *0.1;
    // }
    

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 1.0 + utime * 0.5) * 0.08;
    modelPosition.z += 1.0*sin(modelPosition.y * 27.0 + utime * 0.4) * 0.08;



//     if (length(uMouse) > 0.0) {
//     float distance = length(uMouse - vec2(modelPosition.x, modelPosition.y));
//     if (distance < 1.0) {
//         modelPosition.z += (1.0 - distance) * 0.5;
//     }
// }
  
  vec4 viewPosition = viewMatrix * modelPosition;
  
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}`;

function PlaneGeometry() {
  const mesh = useRef();
  const material = useRef();
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));

  const { items, curSlide } = useSlider();
  const image = items[curSlide].img;
  const texture = useTexture(image);

  const [lastImage, setLastImage] = useState(image);
  const prevTexture = useTexture(lastImage);

  useEffect(() => {
    const newImage = image;
    material.current.uniforms.uProgression.value = 0.0;
    return () => {
      setLastImage(newImage);
    };
  }, [image]);

  const uniforms = {
    utime: { value: 0.0 },
    utexture: { value: texture },
    uPrevTexture: { value: prevTexture },
    uProgression: { value: 0.0 },
    uMouse: { value: new THREE.Vector2() },
  };

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    mesh.current.material.uniforms.utime.value = time;
    mesh.current.material.uniforms.uMouse.value = mousePosition;
    material.current.uniforms.uProgression.value = MathUtils.lerp(
      material.current.uniforms.uProgression.value,
      1.0,
      0.05
    );
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[13.5, 7.3, 32, 32]} />
      <shaderMaterial
        ref={material}
        wireframe={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
      {/* <meshStandardMaterial color="hotpink" /> */}
    </mesh>
  );
}

useSlider.getState().items.forEach((item) => {
  useTexture.preload(item.img);
});

export default PlaneGeometry;

// const handlePointerMove = (event) => {
//   const x = event.pointer.x;
//   const y = event.pointer.y;

//   setMousePosition(new THREE.Vector2(x, y));
//   console.log('Pointer Move:', x, y);
// };

// const handlePointerMove = useCallback((event) => {
//   // Directly use the pointer's normalized device coordinates (NDC)
//   const x = (event.clientX / window.innerWidth) * 2 - 1;
//   const y = -(event.clientY / window.innerHeight) * 2 + 1;
//   setMousePosition(new THREE.Vector2(x, y));
// }, []);
