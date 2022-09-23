import React from "react";

export default function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial wireframe color="hotpink"></meshBasicMaterial>
    </mesh>
  );
}
