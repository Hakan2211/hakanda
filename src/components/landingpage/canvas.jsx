'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Elephant from './elephant_model/elephant';
import LandingText from './text/landingtext';
import Particles from './particles/particles';

function CanvasLanding() {
  return (
    <div className="h-[100svh] fixed top-0 left-0 right-0">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense>
          <Elephant />
        </Suspense>
        <LandingText />
        {/* <Particles /> */}
      </Canvas>
    </div>
  );
}

export default CanvasLanding;
