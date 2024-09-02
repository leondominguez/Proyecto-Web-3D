// SphereGeometry.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FlyControls } from '@react-three/drei';
import { MeshPhysicalMaterial } from 'three';

const CossenoEffect = ({ children }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.cos(time) * 0.5;
    }
  });

  return <group ref={meshRef}>{children}</group>;
};

const SphereGeometry = () => {
  return (
    <React.Fragment>
      <h1 className="title">Esfera con Efecto Cosseno</h1>
      <div className="canvas-container">
        <Canvas camera={{ position: [2, 2, 5] }}>
          <CossenoEffect>
            <mesh>
              <sphereGeometry args={[1, 32, 32]} />
              <MeshPhysicalMaterial color="orange" />
            </mesh>
          </CossenoEffect>
          <FlyControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
        </Canvas>
      </div>
    </React.Fragment>
  );
};

export default SphereGeometry;