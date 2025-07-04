import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 3D Pasta Model Component
const Model = ({ spinning }) => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/PastaCard.glb");
  const ref = useRef();
  const baseRotationX = Math.PI / 2;

  useFrame(() => {
    if (!ref.current) return;

    // Always keep flat
    ref.current.rotation.x = baseRotationX;

    // Rotate slowly on Z if spinning
    if (spinning) {
      ref.current.rotation.z += 0.002;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}
      position={[0, 1, 0]}
      rotation={[baseRotationX, 0, 0]}
      aria-label="3D model of a pasta recipe card"
    />
  );
};

const PastaViewer = () => {
  const [spinning, setSpinning] = useState(true);

  const handleClick = () => {
    setSpinning(false);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "80%",
        height: "600px",
        backgroundColor: "transparent",
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
      <div style={{ width: "100%", flexGrow: 1 }}>
        <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <Suspense fallback={null}>
            <Model spinning={spinning} />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default PastaViewer;
