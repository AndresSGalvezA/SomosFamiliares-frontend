import "./styles.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useUpdate } from "@react-three/fiber";
import React, { useRef, useState } from "react";
const Model = (props) => {
  const gltf = useLoader(
    GLTFLoader,
    "https://cognitive-services.s3.amazonaws.com/obj/dna.glb"
  );
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.4}
        {...props}
        ref={ref}
        scale={active ? 0.1 : 0.12}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      />
    </>
  );
};
export default Model;
