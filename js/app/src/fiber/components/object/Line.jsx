import React from "react";
import * as THREE from "three";

export default function Line(props) {
  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(props.x, props.y, props.z));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <>
      <line geometry={lineGeometry}>
        <lineBasicMaterial color="hotpink" linewidth={10}></lineBasicMaterial>
      </line>
    </>
  );
}
