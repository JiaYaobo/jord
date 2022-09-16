import React from "react";
import { Canvas } from "@react-three/fiber";
import { MotionCanvas } from "framer-motion-3d";
import { Euler } from "@react-three/fiber";

const WordSphere = () => {
  
  return (
    <div id="canvas-container">
      <MotionCanvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh rotation-x={0.5} position={[0, 0, 3]}>
          <boxGeometry/>
          <meshNormalMaterial/>
        </mesh>
      </MotionCanvas>
    </div>
  );
};

export default WordSphere;
