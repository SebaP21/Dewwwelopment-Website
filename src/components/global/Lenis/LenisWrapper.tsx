'use client'

import { LenisProvider } from "@/components/Lenis/LenisProvider" 

export const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  return <LenisProvider>{children}</LenisProvider>
}
