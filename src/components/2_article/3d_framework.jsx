"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  GridHelper,
  AxesHelper,
  Grid,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
function GridWithAxes() {
  return (
    <>
      <Grid
        args={[10, 10]}
        sectionSize={0}
        infiniteGrid
        fadeStrength={8}
        //cellColor="var(--cell-color)"
        cellColor="#7a7e83"
      />

      {/* Axes Helper */}
      <axesHelper
        args={[12]}
        position={[-2, 0.1, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Text
        color={"#a3e635"}
        position={[-2, 1, 5]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Temporal Orientation
      </Text>
      <Text
        color={"#2563eb"}
        position={[-2, 7, 11]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      >
        Decision Timing
      </Text>
      <Text color={"#f97316"} position={[4, 1, 12]} rotation={[0, 0, 0]}>
        Cognitive Processes
      </Text>
    </>
  );
}

function BrainBiasFramework() {
  return (
    <div className="my-10" style={{ height: "600px", borderRadius: "8px" }}>
      <Canvas
        style={{
          height: "100%",
          borderRadius: "8px",
          background: "var(--canvas-bg-color)",
        }}
        //shadows
        camera={{ position: [8, 10, 20] }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <directionalLight
          position={[1, 6, 4]}
          intensity={1}
          castShadow
          color={"white"}
        />
        <GridWithAxes />
      </Canvas>
    </div>
  );
}

export default BrainBiasFramework;
