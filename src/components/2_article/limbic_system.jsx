'use client';
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { BrainModel } from './brain_model';

function LimbicSystem() {
  return (
    <div className="my-10" style={{ height: '600px', borderRadius: '8px' }}>
      <Canvas
        style={{
          height: '100%',
          borderRadius: '8px',
          background: 'var(--canvas-bg-color)',
        }}
        //shadows
        // camera={{ position: viewport === 'mobile' ? [3, 1, 22] : [0, 1, 17] }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <directionalLight
          position={[1, 6, 4]}
          intensity={1}
          castShadow
          color={'white'}
        />
        <BrainModel position={[0, -0.75, 0]} scale={1.2} />
      </Canvas>
    </div>
  );
}

export default LimbicSystem;
