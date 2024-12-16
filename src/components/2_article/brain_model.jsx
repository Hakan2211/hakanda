'use client';

import React, { useRef } from 'react';
import { useGLTF, Text } from '@react-three/drei';

export function BrainModel({ annotations, onAnnotationClick, ...props }) {
  const { nodes, materials } = useGLTF('/models/compressed_brain.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={3.782}>
          <group rotation={[-Math.PI / 2, Math.PI * 2, Math.PI / 2 - 90]}>
            {annotations.map((ann, index) => (
              <group
                key={index}
                position={[ann.position[0], ann.position[1], ann.position[2]]}
              >
                <mesh
                  key={index}
                  position={ann.position}
                  onClick={() => onAnnotationClick(ann.position)}
                >
                  <sphereGeometry args={[2, 16, 16]} />
                  <meshBasicMaterial
                    color={ann.color}
                    transparent
                    opacity={0.65}
                  />
                </mesh>
                <Text
                  rotation={[Math.PI / 2, 0, 0]}
                  position={[
                    ann.position[0],
                    ann.position[1],
                    ann.position[2] + 5,
                  ]} // Offset text slightly above the sphere
                  fontSize={3}
                  color="#f5f0f6"
                  //anchorX="center" // Centers the text horizontally
                  // anchorY="middle" // Centers the text vertically
                >
                  {ann.name}
                </Text>{' '}
              </group>
            ))}

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh1.geometry}
              material={materials.mat0_49}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh2.geometry}
              material={materials.mat0_48}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh3.geometry}
              material={materials.mat0_47}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh4.geometry}
              material={materials.material_7}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh5.geometry}
              material={materials.material_6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh6.geometry}
              material={materials.material_5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh7.geometry}
              material={materials.material_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh10.geometry}
              material={materials.mat0_44}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh11.geometry}
              material={materials.mat0_43}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh12.geometry}
              material={materials.mat0_42}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh13.geometry}
              material={materials.mat0_41}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh14.geometry}
              material={materials.mat0_40}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh15.geometry}
              material={materials.mat0_39}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh16.geometry}
              material={materials.mat0_38}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh17.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh18.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh19.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh20.geometry}
              material={materials.mat0_37}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh21.geometry}
              material={materials.mat0_36}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh22.geometry}
              material={materials.mat0_35}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh23.geometry}
              material={materials.mat0_34}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh24.geometry}
              material={materials.mat0_33}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh25.geometry}
              material={materials.mat0_33}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh26.geometry}
              material={materials.mat0_33}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh27.geometry}
              material={materials.mat0_32}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh28.geometry}
              material={materials.mat0_31}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh29.geometry}
              material={materials.mat0_30}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh30.geometry}
              material={materials.mat0_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh31.geometry}
              material={materials.mat0_27}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh32.geometry}
              material={materials.mat0_26}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh33.geometry}
              material={materials.mat0_25}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh34.geometry}
              material={materials.mat0_24}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh39.geometry}
              material={materials.mat0_19}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh40.geometry}
              material={materials.mat0_18}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh41.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh42.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh43.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh44.geometry}
              material={materials.mat0_17}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh45.geometry}
              material={materials.mat0_16}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh46.geometry}
              material={materials.mat0_15}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh47.geometry}
              material={materials.mat0_14}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh48.geometry}
              material={materials.mat0_29}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh49.geometry}
              material={materials.mat0_13}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh50.geometry}
              material={materials.material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh51.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh58.geometry}
              material={materials.mat0_6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh59.geometry}
              material={materials.mat0_5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh60.geometry}
              material={materials.mat0_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh61.geometry}
              material={materials.mat0_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh62.geometry}
              material={materials.mat0_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh63.geometry}
              material={materials.mat0_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh64.geometry}
              material={materials.mat0_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh65.geometry}
              material={materials.mat0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh0.geometry}
              material={materials.mat0_50}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/compressed_brain.glb');
