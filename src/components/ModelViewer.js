// src/components/ModelViewer.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/chair.glb"); // Place chair.glb in public folder
  return <primitive object={scene} scale={2} />;
};

const ModelViewer = () => (
  <div className="model-viewer" style={{ width: '100%', height: '600px' }}>
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model />
        {/* Add 3D text in front of the model */}
        <Text
          position={[0, 2, 2]}  // Adjust this to place text above and in front
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          This is a placeholder 3d model
        </Text>
      </Suspense>
      <OrbitControls />
    </Canvas>
  </div>
);

export default ModelViewer;
