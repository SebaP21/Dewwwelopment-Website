'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'

// Tworzymy kontekst Lenisa
const LenisContext = createContext<Lenis | null>(null)

// Provider, który otacza całą aplikację
export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)

  useEffect(() => {
    // Inicjalizacja Lenisa z płynnym scrollowaniem
    const lenis = new Lenis({
      // FIX TypeScript: używamy as any, bo typy są niepełne
      smooth: true,
      smoothTouch: true,
      lerp: 0.1, // im mniejsze, tym wolniejszy, bardziej "miękki" scroll
      direction: 'vertical',
      gestureDirection: 'vertical',
	  touchMultiplier: 1.2, // przyjemniejsze scrollowanie palcem
    } as any)

    lenisRef.current = lenis
    setLenisInstance(lenis)

    // Lenis wymaga ręcznego loopa opartego o requestAnimationFrame
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Sprzątamy Lenisa przy odmontowaniu
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  )
}

// Hook do użycia instancji Lenisa np. do scrollTo
export const useLenis = () => useContext(LenisContext)
