"use client"

import { ReactNode } from 'react'
import { ModelProvider } from '@/context/ModelContext'
import { LightingProvider } from '@/context/LightingContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ModelProvider>
      <LightingProvider>
        {children}
      </LightingProvider>
    </ModelProvider>
  )
}
