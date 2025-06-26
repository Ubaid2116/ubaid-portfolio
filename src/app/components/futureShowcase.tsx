'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type React from "react"

interface FeatureShowcaseProps {
    feature: {
        title: string
        description: string
        icon: React.ElementType
    } | null
    onClose: () => void
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ feature, onClose }) => {
    if (!feature) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            >
                <motion.div
                    className="relative w-full max-w-lg p-8 bg-gray-900 rounded-xl border border-gray-800"
                    layoutId={`feature-card-${feature.title}`}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                    <feature.icon className="w-12 h-12 mb-4 text-cyan-400" />
                    <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-gray-300">{feature.description}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default FeatureShowcase

