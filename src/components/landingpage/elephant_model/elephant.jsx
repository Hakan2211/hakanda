import { useGLTF, Gltf, useAnimations } from '@react-three/drei';
import React, { useEffect } from 'react';

function Elephant() {
  const { nodes, materials, animations } = useGLTF('/models/Elephant2.glb');
  const { ref, actions } = useAnimations(animations);
  console.log(nodes, 'nodes');
  console.log(materials, 'materials');
  console.log(animations, 'animations');

  useEffect(() => {
    actions?.EsqueletoAction.play();
  });

  return (
    <>
      <group
        ref={ref}
        scale={[0.5, 0.5, 0.5]}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      >
        {/* <primitive object={nodes.Scene.children[10]} /> */}

        {nodes.Scene.children.map((child) => {
          return <primitive key={child.uuid} object={child} />;
        })}
      </group>
      {/* <Gltf
        ref={ref}
        src="/models/elephant.glb"
        scale={0.01}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      /> */}
    </>
  );
}

export default Elephant;
