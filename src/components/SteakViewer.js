import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 3D Model Component
const Model = ({ spinning }) => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/NYStrip.glb");
  const ref = useRef();
  const baseRotationX = Math.PI / 2;

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x = baseRotationX;

    // Only spin when 'spinning' is true
    if (spinning) {
      ref.current.rotation.z += 0.002; // adjust speed as needed
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}
      position={[0, .5, 0]}
      rotation={[baseRotationX, 0, 0]}
      aria-label="3D model of a steak recipe card"
    />
  );
};

const SteakViewer = () => {
  const [spinning, setSpinning] = useState(true);

  const handleClick = () => {
    setSpinning(false);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "70%",
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

export default SteakViewer;
