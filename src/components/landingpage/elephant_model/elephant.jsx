'use client';
import { useGLTF, useAnimations } from '@react-three/drei';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Elephant() {
  const { scene, animations } = useGLTF('/models/Elephant2.glb');
  const { ref, actions } = useAnimations(animations);
  const pathname = usePathname();

  useEffect(() => {
    const action = actions?.EsqueletoAction;

    if (pathname === '/') {
      action.reset().play();
    } else {
      action.stop();
    }
    return () => {
      action?.stop();
    };
  }, [actions, pathname]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={6} />
      <group ref={ref} scale={0.8} position={[0, -2, 0]} rotation={[0, 0, 0]}>
        {/* {nodes.Scene.children.map((child) => {
          return <primitive key={child.uuid} object={child} />;
        })} */}
        <primitive object={scene} />
      </group>
    </>
  );
}

export default Elephant;
useGLTF.preload('/models/Elephant2.glb');
