// CossenoEffect.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CossenoEffect = ({ children }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = Math.cos(time) * 2;
    }
  });

  return <group ref={ref}>{children}</group>;
};

export default CossenoEffect;