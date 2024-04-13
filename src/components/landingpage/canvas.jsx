'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Elephant from './elephant_model/elephant';

function CanvasLanding() {
  return (
    <div className="h-[100svh] fixed top-0 left-0 right-0">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
        <Elephant />
      </Canvas>
    </div>
  );
}

export default CanvasLanding;
