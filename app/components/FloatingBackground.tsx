'use client'

import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const FloatingShape: React.FC<{ shape: string; color: string; size: number; left: string; top: string }> = ({
  shape,
  color,
  size,
  left,
  top,
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const translateX = useTransform(mouseX, [-500, 500], [-50, 50])
  const translateY = useTransform(mouseY, [-500, 500], [-50, 50])

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event
    mouseX.set(clientX - window.innerWidth / 2)
    mouseY.set(clientY - window.innerHeight / 2)
  }

  return (
    <motion.div
      className={`absolute ${shape} opacity-50`}
      style={{
        left,
        top,
        width: size,
        height: size,
        background: color,
        x: translateX,
        y: translateY,
      }}
      onMouseMove={handleMouseMove}
    />
  )
}

export const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <FloatingShape shape="rounded-full" color="#FF6B6B" size={100} left="10%" top="20%" />
      <FloatingShape shape="rounded-lg" color="#4ECDC4" size={80} left="80%" top="60%" />
      <FloatingShape shape="rounded-full" color="#45B7D1" size={120} left="60%" top="10%" />
      <FloatingShape shape="rounded-lg" color="#F7B731" size={90} left="30%" top="70%" />
      <FloatingShape shape="rounded-full" color="#5D5FEF" size={70} left="70%" top="40%" />
    </div>
  )
}

