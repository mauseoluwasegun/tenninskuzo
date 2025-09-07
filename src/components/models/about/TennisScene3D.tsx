import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Plane, Box, Sphere, Cylinder, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';

// Tennis Ball Component
function TennisBall() {
  const meshRef = useRef<any>();
  const [bounceHeight, setBounceHeight] = useState(0.8); // Initial height
  const [direction, setDirection] = useState(1); // 1 for up, -1 for down

  useFrame((state) => {
    if (meshRef.current) {
      // Simple bounce animation
      const time = state.clock.getElapsedTime();
      const newY = Math.abs(Math.sin(time * 2)) * 0.8;
      meshRef.current.position.y = newY + 0.25; // Add offset for ball radius
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.25, 32, 32]} position={[1, 1.05, 0]}>
      <meshStandardMaterial color="#ADD8E6" emissive="#ADFF2F" emissiveIntensity={0.5} roughness={0.5} metalness={0.1} />
    </Sphere>
  );
}

// Tennis Racket Component
function TennisRacket() {
  const groupRef = useRef<any>();

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation for animation
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.7) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[-1.5, 0.5, -0.5]} rotation={[0, -Math.PI / 4, 0]}>
      {/* Racket Head (Torus) */}
      <Torus args={[0.5, 0.05, 16, 100]} rotation={[0, 0, Math.PI / 2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#4A5568" metalness={0.8} roughness={0.2} />
      </Torus>
      {/* Racket Netting (Cylinder or more complex geometry) - simplified for visual */}
      <Cylinder args={[0.4, 0.4, 0.02, 32]} rotation={[0, 0, Math.PI / 2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#CBD5E0" transparent opacity={0.7} />
      </Cylinder>
      {/* Racket Handle (Cylinder) */}
      <Cylinder args={[0.08, 0.08, 1, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
    </group>
  );
}

// Tennis Net Component
function TennisNet() {
  return (
    <group>
      {/* Net Posts */}
      <Box args={[0.1, 1.0, 0.1]} position={[0, 0.45, -5]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      <Box args={[0.1, 1.0, 0.1]} position={[0, 0.45, 5]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      {/* Net Mesh */}
      <Box args={[0.1, 0.8, 10]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#E2E8F0" transparent opacity={0.8} side={THREE.DoubleSide} />
      </Box>
    </group>
  );
}

function CameraAdjuster() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(5, 5, 5); // Initial camera position
    camera.lookAt(0, 0, 0); // Look at the center of the scene
  }, []);
  return null;
}

const TennisScene3D = () => {
  const { t } = useTranslation();
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
      {/* Info Box */}
      {showInstructions && (
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl text-center max-w-sm">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{t("three_d_scene.title", { defaultValue: "Interactive Tennis Court" })}</h2>
            <p className="text-gray-700 mb-4">
              {t("three_d_scene.description", { defaultValue: "Drag your mouse to orbit around the 3D scene and explore." })}
            </p>
            <button
              onClick={() => setShowInstructions(false)}
              className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition duration-300 shadow-md"
            >
              {t("three_d_scene.got_it", { defaultValue: "Got It!" })}
            </button>
          </div>
        </div>
      )}

      <Canvas
        shadows
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true }}
      >
        <CameraAdjuster />
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.1} minDistance={3} maxDistance={15} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} />

        {/* Ground (Tennis Court) */}
        <Plane args={[20, 10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial color="#4CAF50" /> {/* Green court color */}
          {/* Court Lines */}
          <group>
            {/* Baseline */}
            <mesh position={[0, 0.01, 4.5]} >
                <planeGeometry args={[20, 0.1]} />
                <meshBasicMaterial color="white" />
            </mesh>
            <mesh position={[0, 0.01, -4.5]} >
                <planeGeometry args={[20, 0.1]} />
                <meshBasicMaterial color="white" />
            </mesh>
            {/* Sidelines */}
            <mesh position={[-9.5, 0.01, 0]} >
                <planeGeometry args={[0.1, 10]} />
                <meshBasicMaterial color="white" />
            </mesh>
            <mesh position={[9.5, 0.01, 0]} >
                <planeGeometry args={[0.1, 10]} />
                <meshBasicMaterial color="white" />
            </mesh>
            {/* Center Service Line */}
            <mesh position={[0, 0.01, 0]} >
                <planeGeometry args={[0.1, 10]} />
                <meshBasicMaterial color="white" />
            </mesh>
             {/* Center Service Box Lines */}
             <mesh position={[0, 0.01, 2.5]} >
                <planeGeometry args={[0.1, 5]} />
                <meshBasicMaterial color="white" />
            </mesh>
            <mesh position={[0, 0.01, -2.5]} >
                <planeGeometry args={[0.1, 5]} />
                <meshBasicMaterial color="white" />
            </mesh>
          </group>
        </Plane>

        <TennisBall />
        <TennisRacket />
        <TennisNet />

        {/* Optional: Visual aid for the ground */}
        <gridHelper args={[20, 20, '#555', '#555']} position={[0, 0.01, 0]} />
      </Canvas>
    </div>
  );
};

export default TennisScene3D;