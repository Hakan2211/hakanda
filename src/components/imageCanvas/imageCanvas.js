'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PlaneGeometry from './planeGeometry';
import SliderOverlay from './sliderOverlay';
import ImageSlider from './ImageSlider';

function ImageCanvas() {
  return (
    <>
      <SliderOverlay />
      <Canvas className="w-full h-screen">
        {/* <OrbitControls /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <PlaneGeometry /> */}
        <ImageSlider />
      </Canvas>
    </>
  );
}

export default ImageCanvas;
