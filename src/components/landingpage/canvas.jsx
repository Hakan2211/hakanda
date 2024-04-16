'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Elephant from './elephant_model/elephant';
import LandingText from './text/landingtext';
import Particles from './particles/particles';
import Loader from './elephant_model/loader';

function Placeholder() {
  return (
    <mesh position={[0, -0.5, 0]}>
      <boxGeometry args={[2, 3, 4]} />
      <meshStandardMaterial color="orange" wireframe />
    </mesh>
  );
}

function CanvasLanding() {
  return (
    <div className="h-[100svh] fixed top-0 left-0 right-0">
      <Loader />
      <Canvas>
        <OrbitControls
          maxDistance={6}
          minDistance={4}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Placeholder />}>
          <Elephant />
        </Suspense>
        <LandingText />
        {/* <Particles /> */}
      </Canvas>
    </div>
  );
}

export default CanvasLanding;
