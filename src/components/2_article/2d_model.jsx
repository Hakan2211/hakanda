"use client";

import { Canvas } from "@react-three/fiber";
import { Line, shaderMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

const QuadrantMaterial = shaderMaterial(
  {
    uResolution: [1, 1],
    uColors: [
      new THREE.Color(1, 0, 0),
      new THREE.Color(0, 1, 0),
      new THREE.Color(0, 0, 1),
      new THREE.Color(1, 1, 0),
    ],
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
  // Fragment Shader
  `
    uniform vec3 uColors[4];
    varying vec2 vUv;
  
    void main() {
    //   if (vUv.x < 0.5 && vUv.y > 0.5) {
    //     gl_FragColor = vec4(uColors[0], 1.0); // Top-left
    //   } else if (vUv.x >= 0.5 && vUv.y > 0.5) {
    //     gl_FragColor = vec4(uColors[1], 1.0); // Top-right
    //   } else if (vUv.x < 0.5 && vUv.y <= 0.5) {
    //     gl_FragColor = vec4(uColors[2], 1.0); // Bottom-left
    //   } else {
    //     gl_FragColor = vec4(uColors[3], 1.0); // Bottom-right
    //   }

    vec3 colorTop = mix(uColors[0], uColors[1], vUv.x); // Interpolate top colors
    vec3 colorBottom = mix(uColors[2], uColors[3], vUv.x); // Interpolate bottom colors
    vec3 finalColor = mix(colorBottom, colorTop, vUv.y);  // Interpolate vertically

    gl_FragColor = vec4(finalColor, 1.0);
    }
    `
);

extend({ QuadrantMaterial });

const Quadrants = ({ colors }) => {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <quadrantMaterial
        uResolution={[2, 2]}
        uColors={colors.map((color) => new THREE.Color(color))}
      />
    </mesh>
  );
};

const Axes = () => {
  const axisColor = "black";
  const axisThickness = 3;

  return (
    <>
      <Line
        color={axisColor}
        lineWidth={axisThickness}
        points={[
          [-1, 0, 0],
          [1, 0, 0],
        ]}
      />
      <Line
        color={axisColor}
        lineWidth={axisThickness}
        points={[
          [0, -2, 0],
          [0, 2, 0],
        ]}
      />
    </>
  );
};

const BrainBiasDiagram = () => {
  const customColors = ["#50E3C2", "#4A90E2", "#D0021B", "#F5A623"];
  return (
    <div className="my-10" style={{ height: "600px", borderRadius: "8px" }}>
      {" "}
      <Canvas
        style={{
          height: "100%",
          borderRadius: "8px",
          background: "var(--canvas-bg-color)",
        }}
        //shadows
        camera={{ position: [0, 0, 1] }}
      >
        <ambientLight />
        <Quadrants colors={customColors} />
        <Axes />
        <Text
          fontSize={0.05}
          color={"#171615"}
          position={[0, -0.7, 0]}
          rotation={[0, 0, 0]}
        >
          Fast (Automatic) Processing
        </Text>
        <Text
          fontSize={0.05}
          color={"#171615"}
          position={[0, 0.7, 0]}
          rotation={[0, 0, 0]}
        >
          Slow (Deliberative) Processing
        </Text>
        <Text
          fontSize={0.05}
          color={"#171615"}
          position={[-0.6, 0.05, 0]}
          rotation={[0, 0, 0]}
        >
          Emotions -&gt; Thoughts
        </Text>
        <Text
          fontSize={0.05}
          color={"#171615"}
          position={[0.6, 0.05, 0]}
          rotation={[0, 0, 0]}
        >
          Thoughts -&gt; Emotions
        </Text>
      </Canvas>
    </div>
  );
};

export default BrainBiasDiagram;
