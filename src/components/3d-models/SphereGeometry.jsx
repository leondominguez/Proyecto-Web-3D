// SphereGeometry.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CossenoEffect from './EfecctsGeometry/CossenoEffecs.jsx';

const SphereGeometry = () => {
  return (
    <React.Fragment>
      <h1 className="title">Esfera con Efecto Cosseno</h1>
      <div className="canvas-container">
        <Canvas camera={{ position: [2, 2, 5] }}>
          <CossenoEffect>
            <mesh>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="orange" />
            </mesh>
          </CossenoEffect>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
        </Canvas>
      </div>
    </React.Fragment>
  );
};

export default SphereGeometry;