"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { LIGHTING_PRESETS, LightingPreset, DynamicLightingPreset } from './LightingContext';
import { useLighting } from './LightingContext';

// Define environment preset types to match @react-three/drei Environment component
export type EnvironmentPreset =
  | "apartment"
  | "city"
  | "dawn"
  | "forest"
  | "lobby"
  | "night"
  | "park"
  | "studio"
  | "sunset"
  | "warehouse";

// Define available scenes with metadata
export type Scene = {
  id: string;
  name: string;
  description?: string;
  environmentPreset: EnvironmentPreset;
  lightingPreset: LightingPreset | DynamicLightingPreset;
};

// Map of available scenes
export const SCENES: Record<string, Scene> = {
  studio: {
    id: 'studio',
    name: 'Photo Studio',
    description: 'A clean, professional photography studio setup',
    environmentPreset: 'studio',
    lightingPreset: LIGHTING_PRESETS.natural
  },
  apartment: {
    id: 'apartment',
    name: 'Apartment',
    description: 'A cozy modern apartment interior',
    environmentPreset: 'apartment',
    lightingPreset: LIGHTING_PRESETS.soft
  },
  city: {
    id: 'city',
    name: 'City',
    description: 'Urban landscape with tall buildings',
    environmentPreset: 'city',
    lightingPreset: LIGHTING_PRESETS.natural
  },
  dawn: {
    id: 'dawn',
    name: 'Dawn',
    description: 'Early morning atmosphere with soft light',
    environmentPreset: 'dawn',
    lightingPreset: LIGHTING_PRESETS.warm
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    description: 'Tranquil forest setting with natural lighting',
    environmentPreset: 'forest',
    lightingPreset: {
      ...LIGHTING_PRESETS.natural,
      name: 'Forest Lighting',
      ambientLight: { intensity: 1.2, color: '#a8c8ff' },
      environmentIntensity: 0.8
    } as LightingPreset
  },
  lobby: {
    id: 'lobby',
    name: 'Lobby',
    description: 'Elegant indoor space with ambient lighting',
    environmentPreset: 'lobby',
    lightingPreset: {
      ...LIGHTING_PRESETS.soft,
      name: 'Lobby Lighting',
      ambientLight: { intensity: 1.8, color: '#fffaf0' },
      environmentIntensity: 1.2
    } as LightingPreset
  },
  night: {
    id: 'night',
    name: 'Night',
    description: 'Nighttime scene with dramatic lighting',
    environmentPreset: 'night',
    lightingPreset: LIGHTING_PRESETS.dramatic
  },
  park: {
    id: 'park',
    name: 'Park',
    description: 'Open green space with natural daylight',
    environmentPreset: 'park',
    lightingPreset: {
      ...LIGHTING_PRESETS.natural,
      name: 'Park Lighting',
      ambientLight: { intensity: 1.7, color: '#f8fffa' },
      directionalLight: {
        intensity: 2.2,
        position: [10, 15, 10],
        color: '#fffcf0'
      }
    } as LightingPreset
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    description: 'Beautiful sunset atmosphere',
    environmentPreset: 'sunset',
    lightingPreset: LIGHTING_PRESETS.sunset
  },
  warehouse: {
    id: 'warehouse',
    name: 'Warehouse',
    description: 'Industrial space with warm accent lighting',
    environmentPreset: 'warehouse',
    lightingPreset: {
      ...LIGHTING_PRESETS.soft,
      name: 'Warehouse Lighting',
      environmentIntensity: 1.5
    } as LightingPreset
  }
};

type SceneContextType = {
  selectedScene: Scene;
  setSelectedScene: (scene: Scene) => void;
};

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function SceneProvider({ children }: { children: ReactNode }) {
  const [selectedScene, setSelectedScene] = useState<Scene>(SCENES.warehouse);
  const { setSelectedPreset } = useLighting();

  // When scene changes, update the lighting preset
  useEffect(() => {
    setSelectedPreset(selectedScene.lightingPreset);
  }, [selectedScene, setSelectedPreset]);

  return (
    <SceneContext.Provider value={{ selectedScene, setSelectedScene }}>
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  const context = useContext(SceneContext);

  if (context === undefined) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
}
