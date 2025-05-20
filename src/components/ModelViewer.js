// src/components/ModelViewer.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/chair.glb");
  return (
    <primitive object={scene} scale={2} position={[-1, -2.5, 0]} />
  );
};

const ModelViewer = () => (
  <div className="model-viewer" style={{ width: '100%', height: '600px' }}>
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model />

      </Suspense>
      <OrbitControls />
    </Canvas>
  </div>
);

export default ModelViewer;
