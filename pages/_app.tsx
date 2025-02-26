import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';

import { ModelProvider } from '@/context/ModelContext'
import { LightingProvider } from '@/context/LightingContext'
import { SceneProvider } from '@/context/SceneContext'
import LogoText from '@/components/LogoText'

import "./globals.css"

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LogoText />
      <ModelProvider>
        <LightingProvider>
          <SceneProvider>
          <Component {...pageProps} />
          </SceneProvider>
        </LightingProvider>
      </ModelProvider>
    </>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
