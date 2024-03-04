'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PlaneGeometry from './planeGeometry';

function ImageCanvas() {
  return (
    <Canvas className="w-full h-screen">
      {/* <OrbitControls /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <PlaneGeometry />
    </Canvas>
  );
}

export default ImageCanvas;
