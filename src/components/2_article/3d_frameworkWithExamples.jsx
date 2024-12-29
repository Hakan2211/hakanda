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
      {/* <gridHelper
        args={[10, 5, "#888888", "#444444"]}
        position={[3.05, 5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}

      {/* Axes Helper */}
      <axesHelper
        args={[12]}
        position={[-2, 0.1, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <axesHelper
        args={[12]}
        position={[-2, 0.1, 20]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <axesHelper
        args={[12]}
        position={[-2, 0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <Text
        color={"#a3e635"}
        position={[-2, 1, 22.5]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.5}
      >
        Temporal Orientation
      </Text>
      <Text
        fontSize={0.5}
        color={"#2563eb"}
        position={[-2, 4, 21]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      >
        Decision Timing
      </Text>
      <Text
        fontSize={0.5}
        color={"#f97316"}
        position={[-4.5, 1, 20.5]}
        rotation={[0, 0, 0]}
      >
        Cognitive Processes
      </Text>

      {/* Temporal orientation text: Past,present and future-oriented */}
      <Text
        fontSize={0.5}
        color={"#a3e635"}
        position={[4, 1, 17]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        Past-oriented
      </Text>
      <Text
        fontSize={0.5}
        color={"#a3e635"}
        position={[4, 1, 6]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        Present-oriented
      </Text>
      <Text
        fontSize={0.5}
        color={"#a3e635"}
        position={[4, 1, -4]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        Future-oriented
      </Text>

      {/* Decision-Timing text: Pre, mid and post-decision timing. */}
      <Text
        fontSize={0.5}
        color={"#2563eb"}
        position={[-2, 2, 15]}
        rotation={[0, 0, 0]}
      >
        Pre-Decision
      </Text>
      <Text
        fontSize={0.5}
        color={"#2563eb"}
        position={[-2, 6, 15]}
        rotation={[0, 0, 0]}
      >
        Mid-Decision
      </Text>
      <Text
        fontSize={0.5}
        color={"#2563eb"}
        position={[-2, 10, 15]}
        rotation={[0, 0, 0]}
      >
        Post-Decision
      </Text>
      <Text
        fontSize={0.4}
        color={"#2563eb"}
        position={[-4.5, 11, 15]}
        rotation={[0, 0, 0]}
      >
        Fast (Automatic)
      </Text>
      <Text
        fontSize={0.4}
        color={"#2563eb"}
        position={[0, 11, 15]}
        rotation={[0, 0, 0]}
      >
        Slow (Deliberative)
      </Text>
      <Text
        fontSize={0.4}
        color={"#2563eb"}
        position={[-4.5, 7, 15]}
        rotation={[0, 0, 0]}
      >
        Fast (Automatic)
      </Text>
      <Text
        fontSize={0.4}
        color={"#2563eb"}
        position={[0, 7, 15]}
        rotation={[0, 0, 0]}
      >
        Slow (Deliberative)
      </Text>
      <Text
        fontSize={0.4}
        color={"#2563eb"}
        position={[-4.5, 3, 15]}
        rotation={[0, 0, 0]}
      >
        Fast (Automatic)
      </Text>
      <Text
        fontSize={0.4}
        color={"#2563eb"}
        position={[0, 3, 15]}
        rotation={[0, 0, 0]}
      >
        Slow (Deliberative)
      </Text>
      {/* Cognitive pipeline: Perception, memory, judgement,,decision making, social cognition */}
      <Text
        fontSize={0.5}
        color={"#f97316"}
        position={[0, 1, 21]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Perception
      </Text>
      <Text
        fontSize={0.5}
        color={"#f97316"}
        position={[2, 1, 21]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Memory
      </Text>
      <Text
        fontSize={0.5}
        color={"#f97316"}
        position={[4, 1, 21]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Judgement
      </Text>
      <Text
        fontSize={0.5}
        color={"#f97316"}
        position={[6, 1, 21]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Decision-Making
      </Text>
      <Text
        fontSize={0.5}
        color={"#f97316"}
        position={[8, 1, 21]}
        rotation={[0, Math.PI / 2, 0]}
      >
        Social Cognition
      </Text>
    </>
  );
}

function BiasesExamples() {
  return (
    <>
      <mesh position={[4, 4, 6]}>
        <boxGeometry args={[1, 4, 2]} />
        <meshStandardMaterial color="#16a34a" />
        <Text fontSize={0.5} position={[0, 3, 0]}>
          Confirmation Bias
        </Text>
      </mesh>
      <mesh position={[5.5, 6, 11]}>
        <boxGeometry args={[1, 1, 11]} />
        <meshStandardMaterial color="#6d28d9" />
        <Text fontSize={0.5} position={[0, 1, 0]}>
          Endowment Effect
        </Text>
      </mesh>
      <mesh position={[3, 10, 16]}>
        <boxGeometry args={[3.5, 1, 3]} />
        <meshStandardMaterial color="#44403c" />
        <Text fontSize={0.5} position={[0, 1, 0]}>
          Hindsight Bias
        </Text>
      </mesh>
      <mesh position={[3, 7, 10]}>
        <boxGeometry args={[3.5, 4, 6]} />
        <meshStandardMaterial color="#7dd3fc" />
        <Text fontSize={0.5} position={[0, 3, 0]}>
          Cognitive Dissonance
        </Text>
      </mesh>
      <mesh position={[5, 3, -3]}>
        <boxGeometry args={[3, 5, 9]} />
        <meshStandardMaterial color="#92400e" />
        <Text fontSize={0.5} position={[0, 3, 0]}>
          Overconfidence Bias
        </Text>
      </mesh>
      <mesh position={[5, 8, 18]}>
        <boxGeometry args={[2, 3, 5]} />
        <meshStandardMaterial color="#581c87" />
        <Text fontSize={0.5} position={[0, 3, 0]}>
          Sunk-Cost Fallacy
        </Text>
      </mesh>
      <mesh position={[5, 2, 5]}>
        <boxGeometry args={[2, 3, 5]} />
        <meshStandardMaterial color="#115e59" />
        <Text fontSize={0.5} position={[2, 2, 0]}>
          Anchoring Bias
        </Text>
      </mesh>
      <mesh position={[7, 3, -5]}>
        <boxGeometry args={[1, 5, 5]} />
        <meshStandardMaterial color="#57534e" />
        <Text fontSize={0.5} position={[2, 2, 0]}>
          Loss Aversion
        </Text>
      </mesh>
      <mesh position={[1, 3, 5]}>
        <boxGeometry args={[2, 5, 5]} />
        <meshStandardMaterial color="#a8a29e" />
        <Text fontSize={0.5} position={[0, 3, 0]}>
          Framing Effect
        </Text>
      </mesh>
      <mesh position={[2, 3, 8]}>
        <boxGeometry args={[8, 5, 1]} />
        <meshStandardMaterial color="#3f3f46" />
        <Text fontSize={0.5} position={[0, -1, 1]}>
          Availability Heuristic
        </Text>
      </mesh>
    </>
  );
}

function BrainBiasFrameworkExamples() {
  return (
    <div className="my-10" style={{ height: "600px", borderRadius: "8px" }}>
      <Canvas
        style={{
          height: "100%",
          borderRadius: "8px",
          background: "var(--canvas-bg-color)",
        }}
        //shadows
        camera={{ position: [10, 10, 30] }}
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
        <BiasesExamples />
      </Canvas>
    </div>
  );
}

export default BrainBiasFrameworkExamples;
