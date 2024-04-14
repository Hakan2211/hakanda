'use client';
import { extend } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

const vertexShader = `
  attribute float size;
  varying vec3 vColor;
  uniform vec3 color;

  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `

  varying vec3 vColor;



  void main() {
   
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

const particleMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  uniforms: {
    color: { value: new THREE.Color(0xffffff) },
    // screenCenter: {
    //   value: new THREE.Vector2((window.innerWidth / 2, window.innerHeight / 2)),
    // },
    radius: { value: 100.0 },
  },
  blending: THREE.AdditiveBlending,
  depthTest: false,
  transparent: true,
});

function Particles() {
  const particles = 5000;
  const exclusionRadius = 100; // Radius of the exclusion sphere at the center
  const positions = new Float32Array(particles * 3);

  for (let i = 0; i < particles; i++) {
    let x, y, z, distance;
    do {
      x = (Math.random() * 2 - 1) * 500;
      y = (Math.random() * 2 - 1) * 500;
      z = (Math.random() * 2 - 1) * 500;
      distance = Math.sqrt(x * x + y * y + z * z);
    } while (distance < exclusionRadius); // Keep generating if inside the exclusion zone

    positions[i * 3 + 0] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  //   geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  return (
    <points geometry={geometry} material={particleMaterial}>
      <shaderMaterial
        attach="material"
        args={[
          {
            vertexShader,
            fragmentShader,
            uniforms: {
              color: { value: new THREE.Color(0xffffff) },
            },
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
          },
        ]}
      />
    </points>
  );
}

export default Particles;
