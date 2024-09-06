// SphereGeometry.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ArcballControls, DragControls, FirstPersonControls, OrbitControls, PointerLockControls } from '@react-three/drei';
import CossenoEffect from './EfecctsGeometry/CossenoEffecs.jsx';

const SphereGeometry = () => {
  return (
    <React.Fragment>
      <h1 className="title">Esfera con Efecto Cosseno</h1>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 1, 4], fov: 90 }}>
          <CossenoEffect>
            <mesh scale={[0.8, 0.8, 0.8]}> {/* Ajusta la escala si es necesario */}
              <sphereGeometry args={[1.5, 32, 32]} /> {/* Cambia el tamaño de la esfera si lo necesitas */}
              <meshLambertMaterial color="black" emissive="black" wireframe={true} />
            </mesh>
          </CossenoEffect>
          <PointerLockControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
        </Canvas>
      </div>
    </React.Fragment>
  );
};

export default SphereGeometry;