"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const AgentNetworkVisualization = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        const agents: { x: number; y: number; vx: number; vy: number }[] = []
        const numAgents = 50

        for (let i = 0; i < numAgents; i++) {
            agents.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            agents.forEach((agent) => {
                agent.x += agent.vx
                agent.y += agent.vy

                if (agent.x < 0 || agent.x > canvas.width) agent.vx *= -1
                if (agent.y < 0 || agent.y > canvas.height) agent.vy *= -1

                ctx.beginPath()
                ctx.arc(agent.x, agent.y, 2, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
                ctx.fill()
            })

            for (let i = 0; i < agents.length; i++) {
                for (let j = i + 1; j < agents.length; j++) {
                    const dx = agents[i].x - agents[j].x
                    const dy = agents[i].y - agents[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.moveTo(agents[i].x, agents[i].y)
                        ctx.lineTo(agents[j].x, agents[j].y)
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`
                        ctx.stroke()
                    }
                }
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return (
        <motion.canvas
            ref={canvasRef}
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    )
}

export default AgentNetworkVisualization

