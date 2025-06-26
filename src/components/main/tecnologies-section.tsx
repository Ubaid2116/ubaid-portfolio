"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFlask,
  SiFastapi,
  SiStreamlit,
  SiOpenai,
  SiAuth0,
  SiShadcnui,
  SiApollographql,
} from "react-icons/si";
import { TbApi, TbBrand4Chan } from "react-icons/tb";
import { GiLion } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";

// Organized tech stack by category
const techCategories = [
  {
    name: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="w-10 h-10 text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="w-10 h-10 text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="w-10 h-10 text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-cyan-400" /> },
      { name: "React.js", icon: <FaReact className="w-10 h-10 text-cyan-300" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-white" /> },
      { name: "ShadCN UI", icon: <SiShadcnui className="w-10 h-10 text-purple-400" /> },
    ]
  },
  {
    name: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-green-500" /> },
      { name: "API Integration", icon: <TbApi className="w-10 h-10 text-emerald-400" /> },
      { name: "Python", icon: <FaPython className="w-10 h-10 text-yellow-500" /> },
      { name: "Flask", icon: <SiFlask className="w-10 h-10 text-gray-300" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-10 h-10 text-green-400" /> },
      { name: "GraphQL", icon: <SiApollographql className="w-10 h-10 text-pink-400" /> },
      { name: "Auth & Security", icon: <SiAuth0 className="w-10 h-10 text-orange-600" /> },
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-800" /> },
      { name: "Supabase", icon: <SiSupabase className="w-10 h-10 text-green-500" /> },
    ]
  },
  {
    name: "AI & Automation",
    items: [
      { name: "LangChain", icon: <GiLion className="w-10 h-10 text-yellow-400" /> },
      { name: "LangGraph", icon: <TbBrand4Chan className="w-10 h-10 text-red-500" /> },
      { name: "Crew AI", icon: <FaRobot className="w-10 h-10 text-indigo-400" /> },
      { name: "OpenAI SDKs", icon: <SiOpenai className="w-10 h-10 text-white" /> },
      { name: "Streamlit", icon: <SiStreamlit className="w-10 h-10 text-pink-500" /> },
      { name: "Chainlit", icon: <FaRobot className="w-10 h-10 text-purple-400" /> },
    ]
  },
  {
    name: "DevOps & Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="w-10 h-10 text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="w-10 h-10 text-white" /> },
      { name: "Docker", icon: <FaDocker className="w-10 h-10 text-blue-400" /> },
    ]
  }
];

const EnhancedTechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const handleBetaJoin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }, 1000);
  };

  const currentTechItems = techCategories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden" id="technology">
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                My Tech Stack
              </h2>
              <p className="text-xl text-gray-300">
                Tools and technologies I use to build exceptional digital experiences
              </p>
            </motion.div>

            {/* Category Selector */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {techCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Feature Highlights */}
            <div className="space-y-6">
              {[
                {
                  text: "Modern Web Development",
                  color: "from-blue-500 to-blue-600",
                  description: "Building responsive, performant web applications with React, Next.js, and modern CSS frameworks.",
                },
                {
                  text: "AI Integration",
                  color: "from-purple-500 to-purple-600",
                  description: "Creating intelligent applications with LangChain, OpenAI, and custom AI workflows.",
                },
                {
                  text: "Full-Stack Solutions",
                  color: "from-pink-500 to-pink-600",
                  description: "End-to-end development from database design to frontend implementation.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() =>
                    setActiveFeature(
                      activeFeature === feature.text ? null : feature.text
                    )
                  }
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
                      {feature.text}
                    </span>
                    <AnimatePresence>
                      {activeFeature === feature.text && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-gray-400 mt-2"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={handleBetaJoin}
                  disabled={isLoading}
                  className="text-white border-2 border-purple-500 hover:bg-purple-700 hover:text-white transition-all duration-300 text-lg px-8 py-4 rounded-full relative overflow-hidden group"
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    LET&apos;S COLLABORATE
                  </span>
                  {isLoading && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                    </motion.div>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                    animate={{ scale: isLoading ? 1.5 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
                <AnimatePresence>
                  {showSuccessMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Tech Wheel */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Text */}
              <motion.div
                className="absolute z-20 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 20px rgba(167, 139, 250, 0.5)",
                    "0 0 40px rgba(167, 139, 250, 0.8)",
                    "0 0 20px rgba(167, 139, 250, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {activeCategory}
              </motion.div>

              {/* Rotating Tech Wheel */}
              <motion.div
                className="relative w-80 h-80"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {currentTechItems.map((tech, index) => {
                  const angle = (index / currentTechItems.length) * 2 * Math.PI;
                  const x = Math.cos(angle) * 160;
                  const y = Math.sin(angle) * 160;
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
                        whileHover={{
                          scale: 1.2,
                          boxShadow: "0 0 25px rgba(167, 139, 250, 0.5)",
                        }}
                        onHoverStart={() => setHoveredTech(tech.name)}
                        onHoverEnd={() => setHoveredTech(null)}
                      >
                        {tech.icon}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Decorative Rings */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-purple-500/30 animate-pulse" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-blue-500/20 animate-pulse" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/10 animate-pulse" />
            </div>

            {/* Hovered Tech Name */}
            <AnimatePresence>
              {hoveredTech && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-lg font-semibold"
                >
                  {hoveredTech}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTechStack;