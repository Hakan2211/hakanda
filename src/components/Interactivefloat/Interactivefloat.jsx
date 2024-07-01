'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Interactivefloat() {
  return (
    <div style={{ height: '800px', borderRadius: '8px' }}>
      <Canvas
        style={{
          height: '100%',
          borderRadius: '8px',
          background: 'var(--canvas-bg-color)',
        }}
      >
        {/* <color attach="background" args={[]} /> */}
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Interactivefloat;
