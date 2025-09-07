import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<any>(null);
  
  // Load your custom image texture
  // Replace this URL with your actual image URL
  const texture = useLoader(THREE.TextureLoader, "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&h=500&fit=crop");
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={2}>
      <meshStandardMaterial
        map={texture}
        attach="material"
      />
    </Sphere>
  );
};

const ContactExperience = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

export default ContactExperience;