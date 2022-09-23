import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function CameraController(props) {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = props.mindist;
    controls.maxDistance = props.maxdist;
    return () => {
      controls.dispose();
    };
  }, [camera, gl, props]);
  return null;
}
