import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/geometry/BoxGeometry";
import Sphere from "./components/geometry/SphereGeometry";
import CameraController from "./components/lib/CameraController";
import Line from "./components/object/Line";

export default function Fiber() {
  return (
    <Canvas
      camera={{
        position: [10, 10, 10],
        aspect: window.innerWidth / window.innerHeight,
      }}
      style={{ height: window.innerHeight }}
    >
      <CameraController mindist={2} maxdist={20} />
      <Sphere radius={2}></Sphere>
      <Box position={[6, 0, 1]}></Box>
      <Line x={6} y={0} z={1}></Line>

      <Box position={[-4, 0, -9]}></Box>
      <Line x={-4} y={0} z={-9}></Line>

      <Box position={[6, 0, 6]}></Box>
      <Line x={6} y={0} z={6}></Line>

      <Box position={[-1, 0, -5]}></Box>
      <Line x={-1} y={0} z={-5}></Line>

      <Box position={[8, 0, -8]}></Box>
      <Line x={8} y={0} z={-8}></Line>

      <Box position={[1, 0, 4]}></Box>
      <Line x={1} y={0} z={4}></Line>
      <gridHelper args={[20, 20]} position={[0, 0, 0]} />
    </Canvas>
  );
}
