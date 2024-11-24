'use client'

import { ReactNode } from 'react'
import { Parallax } from 'react-scroll-parallax'

interface ParallaxSectionProps {
  children: ReactNode
}

export default function ParallaxSection({ children }: ParallaxSectionProps) {
  return (
    <Parallax translateY={[-20, 20]} className="relative z-10">
      <div className="bg-background text-foreground rounded-lg shadow-lg p-8">
        {children}
      </div>
    </Parallax>
  )
}

