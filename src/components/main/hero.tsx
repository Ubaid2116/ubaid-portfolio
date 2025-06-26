"use client";

import {
  Brain,
  Code,
  Cloud,
  Terminal,
  ArrowRight,
  Sparkles,
  Rocket,
  Cpu,
  Database,
} from "lucide-react";
import { useState, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  longDescription: string;
}

const features: Feature[] = [
  { 
    icon: Brain, 
    title: "Agentic AI", 
    description: "Smart agents learning and evolving",
    color: "from-purple-500 to-pink-500",
    longDescription: "Developing autonomous AI systems that can learn, adapt, and make decisions independently. Specializing in LLM agents, reinforcement learning, and cognitive architectures."
  },
  { 
    icon: Code, 
    title: "Full-Stack Dev", 
    description: "End-to-end web applications",
    color: "from-blue-500 to-cyan-500",
    longDescription: "Building complete web solutions with modern frameworks like Next.js, React, and Node.js. Focus on performance, accessibility, and seamless user experiences."
  },
  { 
    icon: Cloud, 
    title: "Cloud & DB", 
    description: "Supabase, MongoDB, PostgreSQL",
    color: "from-emerald-500 to-teal-500",
    longDescription: "Expertise in cloud infrastructure and database solutions. Implementing scalable, secure, and efficient data management systems for all application sizes."
  },
  { 
    icon: Terminal, 
    title: "Automation", 
    description: "FastAPI, Flask, Chainlit",
    color: "from-amber-500 to-orange-500",
    longDescription: "Creating powerful automation tools and backend services. Specializing in Python-based solutions for data processing, workflow automation, and AI integration."
  },
];

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

const HeroHeader: FC = () => (
  <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
    {/* Particle Background */}
    <ParticleBackground />
    
    {/* Floating Tech Shapes */}
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

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="block">Muhammad</span>
          <span className="block">Ubaid Hussain</span>
        </motion.h1>
      </motion.div>

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
              "Cloud Specialist"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-gray-300 mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Crafting intelligent digital experiences that blend cutting-edge AI with 
          elegant web solutions to solve real-world problems.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <Button
          size="lg"
          onClick={() => window.location.href = '#projects'}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white uppercase px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group"
        >
          <span>View Projects</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <Button
          size="lg"
          variant="outline"
          onClick={() => window.location.href = '#contact'}
          className="uppercase px-8 py-4 border-2 border-emerald-400/70 text-white rounded-full hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 group"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:from-emerald-300 group-hover:to-teal-300">
            Contact Me
          </span>
        </Button>
      </motion.div>
    </div>
  </section>
);

const FeatureCard: FC<{ 
  feature: Feature; 
  index: number; 
  onSelect: () => void 
}> = ({ feature, index, onSelect }) => {
  return (
    <motion.div
      className={cn(
        "p-8 bg-gradient-to-br rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden",
        `from-white/5 to-white/10 hover:to-white/15 bg-${feature.color}`
      )}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      onClick={onSelect}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 hover:opacity-100 transition-opacity duration-300 z-0" />
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
          <feature.icon className="w-7 h-7 text-white" />
        </div>
        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
        <p className="text-gray-300">{feature.description}</p>
        <div className="mt-4 flex items-center text-sm text-emerald-400">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

const HeroFeatures: FC<{ onSelect: (feat: Feature) => void }> = ({ onSelect }) => (
  <section className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute w-full h-full bg-[url('/circuit-board.svg')] bg-cover bg-center" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.h3 
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Expertise</span>
      </motion.h3>
      
      <motion.p
        className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Combining technical excellence with innovative thinking to deliver exceptional results
      </motion.p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat, i) => (
          <FeatureCard 
            key={feat.title} 
            feature={feat} 
            index={i} 
            onSelect={() => onSelect(feat)} 
          />
        ))}
      </div>
    </div>
  </section>
);

const FeatureDialog: FC<{ 
  feature: Feature; 
  onClose: () => void 
}> = ({ feature, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-gray-900/95 backdrop-blur-xl text-white border-0 rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}
        />
        
        <DialogHeader className="pt-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              {feature.title}
            </DialogTitle>
          </div>
          <DialogDescription className="mt-2 text-gray-300">
            {feature.longDescription}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <h4 className="font-semibold text-emerald-400 mb-3">Key Capabilities</h4>
          <ul className="space-y-2">
            {feature.longDescription.split('. ').filter(Boolean).map((point, i) => (
              <li key={i} className="flex items-start">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 bg-gradient-to-r ${feature.color}`} />
                <span>{point.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 border border-white/20"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PortfolioHero: FC = () => {
  const [selected, setSelected] = useState<Feature | null>(null);
  
  return (
    <>
      <HeroHeader />
      <HeroFeatures onSelect={setSelected} />
      
      <AnimatePresence>
        {selected && (
          <FeatureDialog 
            feature={selected} 
            onClose={() => setSelected(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioHero;