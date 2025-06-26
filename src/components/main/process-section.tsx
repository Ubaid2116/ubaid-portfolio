"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, Cpu, Send } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Zap,
      title: "Initialize AI Core",
      description:
        "Deploy your autonomous AI agent with our neural core technology.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Code,
      title: "Configure Tasks",
      description: "Set up custom workflows and define agent behaviors.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Cpu,
      title: "Train & Adapt",
      description: "Watch as your agent learns and evolves from interactions.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Send,
      title: "Scale Operations",
      description: "Expand your AI workforce as your needs grow.",
      color: "from-violet-500 to-violet-600",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Deploy and scale your AI agents in four simple steps. Our streamlined process ensures quick integration and optimal performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-gray-700 to-gray-800 transform -translate-y-1/2" />
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} p-3 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>

                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-emerald-500/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
