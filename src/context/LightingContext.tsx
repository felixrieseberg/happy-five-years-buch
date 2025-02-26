"use client"

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

export type DynamicLightingPreset = {
  name: string;
  isDynamic: true;
  updateInterval: number;
  getState: (time: number) => {
    ambientLight: {
      intensity: number;
      color?: string;
    };
    environmentIntensity?: number;
    directionalLight?: {
      intensity: number;
      position: [number, number, number];
      color?: string;
    };
    pointLights?: Array<{
      intensity: number;
      position: [number, number, number];
      color?: string;
    }>;
    sky?: {
      distance?: number;
      sunPosition: [number, number, number];
      inclination?: number;
      azimuth?: number;
      mieCoefficient?: number;
      mieDirectionalG?: number;
      rayleigh?: number;
      turbidity?: number;
    };
  };
};

export type LightingPreset = {
  name: string;
  isDynamic?: false;
  ambientLight: {
    intensity: number;
    color?: string;
  };
  environmentIntensity?: number;
  directionalLight?: {
    intensity: number;
    position: [number, number, number];
    color?: string;
  };
  pointLights?: Array<{
    intensity: number;
    position: [number, number, number];
    color?: string;
  }>;
  sky?: {
    distance?: number;
    sunPosition: [number, number, number];
    inclination?: number;
    azimuth?: number;
    mieCoefficient?: number;
    mieDirectionalG?: number;
    rayleigh?: number;
    turbidity?: number;
  };
};

export const LIGHTING_PRESETS: Record<string, LightingPreset | DynamicLightingPreset> = {
  natural: {
    name: 'Natural',
    ambientLight: { intensity: 1.5 },
    environmentIntensity: 1.0,
    directionalLight: {
      intensity: 2,
      position: [10, 10, 10],
      color: '#ffffff'
    },
    sky: {
      distance: 450000,
      sunPosition: [10, 10, 10],
      inclination: 0.6,
      azimuth: 0.2,
      mieCoefficient: 0.005,
      mieDirectionalG: 0.8,
      rayleigh: 2,
      turbidity: 8
    }
  },
  warm: {
    name: 'Warm',
    ambientLight: { intensity: 1.2, color: '#ffd700' },
    environmentIntensity: 1.2,
    directionalLight: {
      intensity: 1.5,
      position: [5, 5, 5],
      color: '#ff8c00'
    },
    sky: {
      distance: 450000,
      sunPosition: [5, 1, 5], // Lower sun position for more orange sky
      inclination: 0.1, // Very low inclination for sunset colors
      azimuth: 0.25, // Adjusted for warmer angle
      mieCoefficient: 0.025, // Increased scattering for more orange
      mieDirectionalG: 0.95, // More forward scattering for vivid colors
      rayleigh: 6, // Increased for stronger warm colors
      turbidity: 20 // Very hazy for rich orange/yellow sky
    }
  },
  dramatic: {
    name: 'Dramatic',
    ambientLight: { intensity: 0.5 },
    environmentIntensity: 0.8,
    pointLights: [
      {
        intensity: 2,
        position: [-10, 5, 5],
        color: '#ff0000'
      },
      {
        intensity: 2,
        position: [10, 5, -5],
        color: '#0000ff'
      }
    ],
    sky: {
      distance: 450000,
      sunPosition: [0, -1, -10], // Sun below horizon for dramatic dark sky
      inclination: 0.1,
      azimuth: 0.15,
      mieCoefficient: 0.02,
      mieDirectionalG: 0.9,
      rayleigh: 4,
      turbidity: 15 // Very hazy/moody
    }
  },
  soft: {
    name: 'Soft',
    ambientLight: { intensity: 2, color: '#e6e6fa' },
    environmentIntensity: 0.7,
    directionalLight: {
      intensity: 0.8,
      position: [0, 10, 0],
      color: '#ffffff'
    },
    sky: {
      distance: 450000,
      sunPosition: [0, 10, 0],
      inclination: 0.8,
      azimuth: 0.5,
      mieCoefficient: 0.003, // Less scattering for clearer sky
      mieDirectionalG: 0.7,
      rayleigh: 1.5, // Less Rayleigh scattering for softer blue
      turbidity: 5 // Clear sky
    }
  },
  sunset: {
    name: 'Sunset',
    isDynamic: true,
    updateInterval: 100,
    getState: (time) => {
      const t = time / 5000; // Slower animation
      const sunHeight = Math.max(0, Math.sin(t) * 10);
      const intensity = 0.5 + (sunHeight / 10);
      const sunX = Math.cos(t) * 10;
      const sunZ = Math.sin(t) * 10;

      // Calculate sky parameters based on sun position
      const sunInclination = (sunHeight / 10); // 0 to 1
      const sunAzimuth = (Math.atan2(sunZ, sunX) / (2 * Math.PI)) + 0.5; // 0 to 1

      return {
        ambientLight: {
          intensity: intensity * 0.8,
          color: `rgb(${255}, ${150 + sunHeight * 10}, ${150 + sunHeight * 10})`
        },
        environmentIntensity: 0.8 + (sunHeight / 10) * 0.8, // Environment light stronger when sun is higher
        directionalLight: {
          intensity: intensity * 2,
          position: [sunX, sunHeight, sunZ],
          color: '#ff8c42'
        },
        sky: {
          distance: 450000,
          sunPosition: [sunX, sunHeight, sunZ],
          inclination: sunInclination,
          azimuth: sunAzimuth,
          mieCoefficient: 0.005 + (1 - sunInclination) * 0.015,
          mieDirectionalG: 0.7 + (1 - sunInclination) * 0.2,
          rayleigh: 2 + (1 - sunInclination),
          turbidity: 10 - sunInclination * 5
        }
      };
    }
  }
};

type LightingContextType = {
  selectedPreset: LightingPreset | DynamicLightingPreset;
  setSelectedPreset: (preset: LightingPreset | DynamicLightingPreset) => void;
  currentLightingState: Omit<LightingPreset, 'name' | 'isDynamic'>;
};

const LightingContext = createContext<LightingContextType | undefined>(undefined);

export function LightingProvider({ children }: { children: ReactNode }) {
  const [selectedPreset, setSelectedPreset] = useState<LightingPreset | DynamicLightingPreset>(LIGHTING_PRESETS.natural);
  const [currentLightingState, setCurrentLightingState] = useState<Omit<LightingPreset, 'name' | 'isDynamic'>>(
    LIGHTING_PRESETS.natural as LightingPreset
  );

  const updateDynamicLighting = useCallback(() => {
    if (selectedPreset.isDynamic) {
      setCurrentLightingState(selectedPreset.getState(Date.now()));
    } else {
      setCurrentLightingState(selectedPreset as LightingPreset);
    }
  }, [selectedPreset]);

  useEffect(() => {
    if (!selectedPreset.isDynamic) {
      setCurrentLightingState(selectedPreset as LightingPreset);
      return;
    }

    const intervalId = setInterval(updateDynamicLighting, selectedPreset.updateInterval);
    return () => clearInterval(intervalId);
  }, [selectedPreset, updateDynamicLighting]);

  return (
    <LightingContext.Provider value={{ selectedPreset, setSelectedPreset, currentLightingState }}>
      {children}
    </LightingContext.Provider>
  );
}

export function useLighting() {
  const context = useContext(LightingContext);

  if (context === undefined) {
    throw new Error('useLighting must be used within a LightingProvider');
  }
  return context;
}
