import type React from "react"

type GradientTextProps = {
    children: React.ReactNode
}

const GradientText = ({ children }: GradientTextProps) => {
    return (
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-300% animate-gradient">
            {children}
        </span>
    )
}

export default GradientText

