'use client';

import { OrbitControls, Text, SoftShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useRef, useState, useEffect } from 'react';

function Interactivefloat() {
  const [clicked, setClicked] = useState([false, false, false]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const handleClick = (index) => {
    setClicked((prev) => {
      const newClicked = [...prev];
      newClicked[index] = !newClicked[index];
      return newClicked;
    });
  };
  return (
    <div className="my-10" style={{ height: '800px', borderRadius: '8px' }}>
      <Canvas
        style={{
          height: '100%',
          borderRadius: '8px',
          background: 'var(--canvas-bg-color)',
        }}
        shadows
        camera={{ position: [0, 1, 17] }}
      >
        {/* <color attach="background" args={[]} /> */}
        {/* <SoftShadows /> */}
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <directionalLight
          position={[1, 6, 4]}
          intensity={1}
          castShadow
          color={'white'}
        />
        <motion.mesh
          onClick={() => handleClick(0)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          animate={{
            y: clicked[0] ? 4 : 0,
            //rotateY: clicked[0] ? 360 : 0,
          }}
          transition={{
            duration: 2,
            type: 'spring',
            stiffness: 200,
            damping: 8,
            mass: 1,
          }}
          position-x="-4"
          scale={0.1}
          receiveShadow
          castShadow
        >
          <Text fontSize={3} color={'#fff'} position={[0, 6, 0]}>
            1M Float
          </Text>
          <boxGeometry args={[1, 1]} />
          <meshStandardMaterial color="#D11A1A" />
        </motion.mesh>
        <motion.mesh
          onClick={() => handleClick(1)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          animate={{
            y: clicked[1] ? 4 : 0,
            //rotateY: clicked[1] ? 360 : 0,
          }}
          transition={{
            duration: 2,
            type: 'spring',
            stiffness: 150,
            damping: 20,
            mass: 3,
          }}
          position-x="-1"
          scale={1}
          receiveShadow
          castShadow
        >
          <Text fontSize={0.5} color={'#fff'} position={[0, 2, 0]}>
            10M Float
          </Text>
          <boxGeometry args={[1, 1]} />
          <meshStandardMaterial color="#74B350" />
        </motion.mesh>
        <motion.mesh
          onClick={() => handleClick(2)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          animate={{
            y: clicked[2] ? 4 : 0,
            //rotateY: clicked[2] ? 90 : 0,
          }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 60,
            damping: 80,
            mass: 3,
          }}
          position-x="4"
          scale={5}
          receiveShadow
          castShadow
        >
          <Text fontSize={0.3} color={'#fff'} position={[0, 1, 0]}>
            50M Float
          </Text>
          <boxGeometry args={[1, 1]} />
          <meshStandardMaterial color="#E1CA36" />
        </motion.mesh>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -4, 0]}
        >
          <planeGeometry args={[20, 50]} />
          <meshStandardMaterial color={'#4A5659'} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Interactivefloat;
