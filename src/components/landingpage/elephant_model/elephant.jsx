'use client';
import useViewport from '@/hooks/useViewport';
import { useGLTF, useAnimations } from '@react-three/drei';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSpring, a } from '@react-spring/three';

function Elephant() {
  const { scene, animations } = useGLTF('/models/Elephant2.glb');
  const { ref, actions } = useAnimations(animations);
  const pathname = usePathname();
  const viewport = useViewport();

  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 10, tension: 120, friction: 50 },
  }));

  useEffect(() => {
    const action = actions?.EsqueletoAction;

    if (pathname === '/') {
      action.reset().play();
    } else {
      action.stop();
    }

    function handleMouseMove(event) {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      // const distance = Math.sqrt(x * x + y * y);
      // const activeRadius = 0.5;
      // if (distance < activeRadius) {}
      const horizontalRotation = Math.max(
        -Math.PI / 8,
        Math.min(Math.PI / 8, (x * Math.PI) / 4)
      );
      const verticalRotation = Math.max(
        -Math.PI / 16,
        Math.min(Math.PI / 16, (-y * Math.PI) / 8)
      );
      api.start({ rotation: [verticalRotation, horizontalRotation, 0] });
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      action?.stop();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [actions, pathname, api]);

  const scale =
    viewport === 'mobile' ? 0.76 : viewport === 'laptop' ? 0.73 : 0.73;
  const positionY =
    viewport === 'mobile' ? -2.2 : viewport === 'laptop' ? -2.2 : -2.1;

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={6} />
      <a.group
        ref={ref}
        scale={scale}
        position={[0, positionY, 0]}
        rotation={rotation}
      >
        {/* {nodes.Scene.children.map((child) => {
          return <primitive key={child.uuid} object={child} />;
        })} */}
        <primitive object={scene} />
      </a.group>
    </>
  );
}

export default Elephant;
useGLTF.preload('/models/Elephant2.glb');
