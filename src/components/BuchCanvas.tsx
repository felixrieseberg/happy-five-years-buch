"use client";

import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";

import { BuchModel } from "@/components/BuchModel";
import { FloatingMenu } from "@/components/FloatingMenu";
import { useLighting } from "@/context/LightingContext";
import { useScene } from "@/context/SceneContext";

function RotatingBuchModel() {
  const modelRef = useRef<THREE.Group>(null);

  return <BuchModel ref={modelRef} scale={.3} />;
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
      ? [40, 25, 40] // Closer and slightly angled for nighttime
      : [60, 30, 60]; // Further back and angled for daytime

    camera.position.set(basePosition[0], basePosition[1], basePosition[2]);
    camera.lookAt(0, 10, 0);

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
    <div className="h-screen w-full relative">
      <FloatingMenu />
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
            target={[0, 35, 0]}
            autoRotate={true}
            autoRotateSpeed={0.2}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
