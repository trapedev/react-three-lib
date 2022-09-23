import React from "react";

export default function Sphere(props) {
  return (
    <mesh>
      <sphereGeometry args={[props.radius]} />
      <meshBasicMaterial wireframe color="blue" />
    </mesh>
  );
}
