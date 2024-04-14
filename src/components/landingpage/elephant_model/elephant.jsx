import { useGLTF, useAnimations } from '@react-three/drei';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Elephant() {
  const { nodes, materials, animations } = useGLTF('/models/Elephant2.glb');
  const { ref, actions } = useAnimations(animations);
  const pathname = usePathname();

  console.log(nodes, 'nodes');
  console.log(materials, 'materials');
  console.log(animations, 'animations');

  useEffect(() => {
    const action = actions?.EsqueletoAction;

    if (pathname === '/') {
      action.reset().play();
      console.log(pathname, 'pathname triggered');
    }
    return () => {
      action?.stop();
    };
  }, [actions, pathname]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={6} />

      <group ref={ref} scale={0.7} position={[0, -2, 0]} rotation={[0, 0, 0]}>
        {nodes.Scene.children.map((child) => {
          return <primitive key={child.uuid} object={child} />;
        })}
      </group>
    </>
  );
}

export default Elephant;
useGLTF.preload('/models/Elephant2.glb');
