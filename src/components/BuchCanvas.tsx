"use client";

import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

import { BuchModel } from "@/components/BuchModel";
import { FloatingMenu } from "@/components/FloatingMenu";
import { useLighting } from "@/context/LightingContext";
import { useScene } from "@/context/SceneContext";

// Calculate the offset to shift the model to the left
// This value represents how much we want to shift the model to the left (in world units)
const MODEL_OFFSET_X = -50; // Increased the offset for more shift to the left

// Fixed offset percentage for the canvas shift
const CANVAS_OFFSET_PERCENTAGE = 25; // Use a fixed value that works well

function RotatingBuchModel() {
  const modelRef = useRef<THREE.Group>(null);

  return (
    <group position={[MODEL_OFFSET_X, 0, 0]}>
      <BuchModel ref={modelRef} scale={.3} />
    </group>
  );
}

function SceneEnvironment() {
  const { currentLightingState } = useLighting();
  const { selectedScene } = useScene();

  // Determine fog color based on lighting state
  const fogColor = currentLightingState.ambientLight.color || '#87ceeb';
  const fogDensity = currentLightingState.sky?.turbidity
    ? (currentLightingState.sky.turbidity / 20) * 0.002 // Scale fog with turbidity
    : 0.001;

  return (
    <>
      <group rotation={[0, 0, 0]}>
        <Environment
          preset={selectedScene.environmentPreset}
          background={true}
          resolution={2048}
          frames={Infinity}
          near={1}
          far={1000}
          environmentIntensity={currentLightingState.environmentIntensity || 1}
          ground={{
            height: 100,
            radius: 500,
            scale: 500
          }}
        />
      </group>
      <fog attach="fog" args={[fogColor, fogDensity]} />
    </>
  );
}

function CameraController() {
  const { camera } = useThree();
  const { currentLightingState } = useLighting();
  const hasSetInitialPosition = useRef(false);

  useEffect(() => {
    if (hasSetInitialPosition.current) return;

    // Set initial camera position based on current lighting
    const sunY = currentLightingState.sky?.sunPosition?.[1] ?? 1;
    const isNighttime = sunY < 0;
    const basePosition: [number, number, number] = isNighttime
      ? [40 + MODEL_OFFSET_X, 25, 40] // Adjust X position by the offset
      : [60 + MODEL_OFFSET_X, 30, 60]; // Adjust X position by the offset

    camera.position.set(basePosition[0], basePosition[1], basePosition[2]);
    camera.lookAt(MODEL_OFFSET_X, 10, 0); // Look at the offset position

    hasSetInitialPosition.current = true;
  }, [camera, currentLightingState]);

  return null;
}

function SceneLighting() {
  const { currentLightingState } = useLighting();

  return (
    <>
      <ambientLight
        intensity={currentLightingState.ambientLight.intensity}
        color={currentLightingState.ambientLight.color}
      />

      {currentLightingState.directionalLight && (
        <directionalLight
          intensity={currentLightingState.directionalLight.intensity}
          position={currentLightingState.directionalLight.position}
          color={currentLightingState.directionalLight.color}
        />
      )}

      {currentLightingState.pointLights?.map((light, index) => (
        <pointLight
          key={index}
          intensity={light.intensity}
          position={light.position}
          color={light.color}
        />
      ))}
    </>
  );
}

export function BuchCanvas() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Canvas container with negative margin to extend beyond the viewport */}
      <div
        className="h-full w-[calc(100%+400px)] relative" // Increased width to allow for more shift
        style={{
          marginLeft: `-${CANVAS_OFFSET_PERCENTAGE}%`,
        }}
      >
        <Suspense>
          <Canvas
            className="h-full w-full"
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2
            }}
          >
            <CameraController />
            <SceneEnvironment />
            <SceneLighting />
            <RotatingBuchModel />
            <OrbitControls
              enableZoom={true}
              enableRotate={true}
              enablePan={true}
              maxPolarAngle={Math.PI * 0.45}
              minDistance={20}
              maxDistance={100}
              target={[MODEL_OFFSET_X, 35, 0]} // Adjust the target to match the model's offset
              autoRotate={true}
              autoRotateSpeed={0.2}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* Position the menu absolutely on top of the canvas */}
      <div className="floating-menu-container absolute top-0 right-0 z-10">
        <FloatingMenu />
      </div>
    </div>
  )
}
