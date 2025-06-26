"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  ArrowRight,
  Cpu,
  Database,
  Sparkles,
  User,
  Briefcase,
  Globe,
  Layers,
  Server,
  Rocket,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -Math.random() * 100 - 50],
            x: [0, (Math.random() - 0.5) * 50]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

const FloatingShapes = () => {
  const shapes = [
    { icon: Rocket, className: "top-1/4 left-1/6 text-purple-400/30" },
    { icon: Cpu, className: "top-1/3 right-1/5 text-blue-400/30" },
    { icon: Database, className: "bottom-1/4 left-1/4 text-emerald-400/30" },
    { icon: Sparkles, className: "bottom-1/3 right-1/6 text-amber-400/30" },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute text-6xl md:text-8xl ${shape.className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 1],
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        >
          <shape.icon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2024",
      title: "Freelance Front-end Developer (Ongoing)",
      company: "Ajman-based Client (Long-Term)",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Started Freelancing Journey",
      company: "Independent Client Work",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-500 to-teal-500"
    },
  ];

  return (
    <div className="relative pl-8 mt-8 space-y-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-amber-500/20" />
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <div className={`absolute -left-9 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
            {exp.icon}
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/30">
            <span className="text-sm text-gray-400">{exp.year}</span>
            <h4 className="text-lg font-semibold text-white mt-1">{exp.title}</h4>
            <p className="text-gray-400">{exp.company}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <ParticleBackground />
      <FloatingShapes />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full -top-40 -left-40 filter blur-3xl animate-[pulse_8s_infinite]" />
        <div className="absolute w-80 h-80 bg-emerald-500/20 rounded-full -bottom-32 -right-32 filter blur-2xl animate-[pulse_10s_infinite]" />
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full top-1/3 -right-20 filter blur-xl animate-[pulse_12s_infinite]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-400 text-sm font-medium">
                <User className="w-4 h-4 mr-2" />
                ABOUT ME
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400"
            >
              <span className="block">Muhammad</span>
              <span className="block">Ubaid Hussain</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-200">
                <Typewriter
                  words={[
                    "Agentic AI Developer",
                    "Full-Stack Engineer",
                    "Tech Innovator",
                    "AI Solutions Architect",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-invert max-w-xl text-gray-300 mb-8 mt-6"
              >
                <p className="text-lg">
                  With over 1 year of experience in building cutting-edge technology solutions,
                  I specialize in creating intelligent systems that bridge the gap between
                  artificial intelligence and real-world applications.
                </p>
                <p>
                  My passion lies in developing agentic AI architectures and scalable full-stack
                  applications that push the boundaries of what&apos;s possible with modern technology.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/30">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <span className="text-white">1+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/30">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-white">Global Projects</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/30">
                <Layers className="w-6 h-6 text-emerald-400" />
                <span className="text-white">Full-Stack Expertise</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/30">
                <Server className="w-6 h-6 text-amber-400" />
                <span className="text-white">Agentic AI Developer</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all hover:shadow-purple-500/20">
                <span>Download CV</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px]"
          >
            {/* Central Profile Card */}
            <motion.div
              className="absolute inset-0 m-auto w-64 h-80 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 overflow-hidden shadow-xl mt-16"
              style={{
                transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-600/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 mb-4 overflow-hidden border-2 border-white/20 shadow-lg">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <Image src={"/profile.png"} alt="Profile Picture" width={100} height={100} className="rounded-full"/>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              className="absolute -bottom-20 left-0 right-0 mx-auto w-full max-w-md bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="flex items-center text-lg font-semibold text-white mb-4">
                <Briefcase className="w-5 h-5 text-purple-400 mr-2" />
                Professional Journey
              </h3>
              <ExperienceTimeline />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}