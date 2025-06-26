"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaRobot } from 'react-icons/fa'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <FaRobot className="w-20 h-20 text-purple-500" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-bold text-white"
        >
          Agentia World
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-8 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"
        />
      </div>
    </motion.div>
  )
} 