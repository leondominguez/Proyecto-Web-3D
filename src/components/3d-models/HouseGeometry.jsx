import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";


const House = () => {
  const houseRef = useRef(null);

  const rotateHouse = () => {
    if (houseRef.current) {
      houseRef.current.rotation.y += 0.04;
    }
  };

  useFrame(() => {
    rotateHouse();
  });

  return (
    <group ref={houseRef} name="house" scale={[1, 1, 1]}>
      <mesh
        name="cono"
        position={[0, 1.25, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
        scale={1.5}
      >
        <coneGeometry args={[1, 1, 6]} />
        <meshStandardMaterial color={0xffc300} />
      </mesh>

      <mesh name="cubo">
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>
    </group>
  );
};

export default House;