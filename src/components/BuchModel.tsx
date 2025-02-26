"use client"

import React, { useEffect, useState } from 'react'
import { useFBX, useAnimations, useTexture } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import * as THREE from 'three'

import { useModel } from '@/context/ModelContext'

type Animation = {
  name: string
}

export const ANIMATIONS: Record<string, Animation> = {
  idle_0: { name: 'Idle I' },
  idle_1: { name: 'Idle II' },
  catwalk: { name: 'Catwalk' },
  dance: { name: 'Dance' },
  bartending: { name: 'Bartending' },
  cpr: { name: 'CPR' },
  golf_drive: { name: 'Golf Drive' },
  mma: { name: 'MMA' },
}

export type AnimationKey = keyof typeof ANIMATIONS

export const BuchModel = React.forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { selectedUser, selectedAnimation } = useModel();
  const [key, setKey] = useState(0);

  const fbxId = selectedAnimation ?? 'idle_0'
  const fbxPath = `/fbx/buch_${fbxId}.fbx?v=${key}`
  const fbx = useFBX(fbxPath)
  const textureId = selectedUser?.id ?? 'buch'
  const texture = useTexture(`textures/${textureId}.jpg`)
  const { actions } = useAnimations(fbx.animations, fbx);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [selectedAnimation]);

  useEffect(() => {
    // Apply texture to all materials in the model
    fbx.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          // Apply the texture
          child.material.map = texture;

          console.log(child.material)

          // Enhance material properties for better environmental lighting
          if (child.material instanceof THREE.MeshPhongMaterial) {
            // Adjust material properties for better light response
            child.material.shininess = 10;
            child.material.specular = new THREE.Color(0x444444);
          }

          child.material.needsUpdate = true;
        }
      }
    });
  }, [selectedAnimation, fbx, texture]);

  useEffect(() => {
    // Play all animations
    Object.values(actions).forEach(action => {
      if (action) {
        action.reset().play();
      }
    });
  }, [selectedAnimation, fbx, actions]);

  if (!texture || !fbx) {
    return null;
  }

  return (
    <group {...props} ref={ref} dispose={null} position={[0, 0, 0]} rotation={[0, Math.PI * 2, 0]}>
      <primitive object={fbx} />
    </group>
  )
})

BuchModel.displayName = 'BuchModel'
