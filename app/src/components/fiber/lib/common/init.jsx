// import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";

export default function Init() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1}></ambientLight>
        <directionalLight
          color={"red"}
          position={[0, 0, 0.5]}
        ></directionalLight>
        <mesh>
          <boxGeometry args={[2, 2, 2]}></boxGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
      </Canvas>
    </div>
  );
}
