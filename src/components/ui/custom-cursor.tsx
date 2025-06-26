"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Extend the Navigator type to include msMaxTouchPoints
interface NavigatorWithMS extends Navigator {
  msMaxTouchPoints?: number
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true) // Default to true to prevent hydration mismatch

  useEffect(() => {
    // Check if it's a touch device
    const nav = navigator as NavigatorWithMS
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      (nav.msMaxTouchPoints ?? 0) > 0
    )

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      )
    }

    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isTouchDevice])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[999] hidden md:block" // Also hide on small screens
      animate={{
        x: position.x - 3,
        y: position.y - 2,
      }}
      transition={{ duration: 0 }}
    >
      <div className={`
        relative
        ${isPointer ? 'scale-125' : 'scale-100'}
        transition-transform duration-150
      `}>
        {/* Main cursor shape */}
        <div className="
          w-[12px] h-[18px] 
          border-l-[2px] border-t-[2px] border-r-[2px]
          border-white
          skew-x-[20deg]
          relative
        ">
          {/* Cursor tail */}
          <div className="
            absolute 
            top-[16px] left-[1px]
            w-[2px] h-[6px] 
            bg-white
            skew-x-[-40deg]
          " />
        </div>
        
        {/* Subtle glow */}
        <div className={`
          absolute inset-0
          bg-gradient-to-br
          ${isPointer ? 'from-purple-500/30 to-emerald-500/30' : 'from-white/20 to-white/5'}
          blur-sm
          transition-colors duration-150
        `} />
      </div>
    </motion.div>
  )
}
