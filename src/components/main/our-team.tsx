"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Github,
  Star,
  Sparkles,
  Award,
  Brain,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  achievements: { icon: React.ElementType; text: string }[];
  quote: string;
  background: string;
  expertise: string[];
  projects: { name: string; description: string }[];
  stats: Record<string, string | number>;
}

const PremiumTeam = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Zia Khan",
      role: "XYZ",
      image: "https://upload.wikimedia.org/wikipedia/en/0/03/Zia-Ullah-Khan.jpg",
      achievements: [
        { icon: Star, text: "Pioneer in Neural Networks" },
        { icon: Award, text: "AI Breakthrough Award 2024" },
        { icon: Brain, text: "15+ Research Papers" },
      ],
      quote:
        "The future of AI is not just about technology, it's about creating intelligence that understands and adapts.",
      background: "Former Research Lead at DeepMind",
      expertise: ["Quantum AI", "Neural Architecture", "Deep Learning"],
      projects: [
        {
          name: "NeuralCore Framework",
          description: "Revolutionary AI architecture",
        },
        {
          name: "Quantum Bridge",
          description: "Quantum-classical AI integration",
        },
      ],
      stats: {
        papers: 47,
        citations: "10K+",
        experience: "15+",
      },
    },
    {
      name: "Muhammad Qasim",
      role: "XYZ",
      image: "https://i.ytimg.com/vi/Dugt3gteUqA/maxresdefault.jpg",
      achievements: [
        { icon: Star, text: "Pioneer in Neural Networks" },
        { icon: Award, text: "AI Breakthrough Award 2024" },
        { icon: Brain, text: "15+ Research Papers" },
      ],
      quote:
        "The future of AI is not just about technology, it's about creating intelligence that understands and adapts.",
      background: "Former Research Lead at DeepMind",
      expertise: ["Quantum AI", "Neural Architecture", "Deep Learning"],
      projects: [
        {
          name: "NeuralCore Framework",
          description: "Revolutionary AI architecture",
        },
        {
          name: "Quantum Bridge",
          description: "Quantum-classical AI integration",
        },
      ],
      stats: {
        papers: 47,
        citations: "10K+",
        experience: "15+",
      },
    },
    {
      name: "Ameen Alam",
      role: "XYZ",
      image: "https://i.ytimg.com/vi/if65hll7pUM/maxresdefault.jpg",
      achievements: [
        { icon: Star, text: "Pioneer in Neural Networks" },
        { icon: Award, text: "AI Breakthrough Award 2024" },
        { icon: Brain, text: "15+ Research Papers" },
      ],
      quote:
        "The future of AI is not just about technology, it's about creating intelligence that understands and adapts.",
      background: "Former Research Lead at DeepMind",
      expertise: ["Quantum AI", "Neural Architecture", "Deep Learning"],
      projects: [
        {
          name: "NeuralCore Framework",
          description: "Revolutionary AI architecture",
        },
        {
          name: "Quantum Bridge",
          description: "Quantum-classical AI integration",
        },
      ],
      stats: {
        papers: 47,
        citations: "10K+",
        experience: "15+",
      },
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden py-32">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24 space-y-8"
        >
          <motion.div
            className="inline-block relative"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full opacity-50" />
            <Sparkles className="w-16 h-16 text-white relative z-10" />
          </motion.div>

          <h2 className="text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400">
              Visionary Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Meet the brilliant minds driving the future of artificial intelligence
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div
                className="relative h-[550px] rounded-xl overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative h-full transition-transform duration-1000"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 10, rotateX: 5 }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />

                  {/* Image Section */}
                  <div className="relative h-80">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-emerald-400 font-medium">{member.role}</p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {member.achievements.map((achievement) => (
                        <motion.div
                          key={achievement.text}
                          className="flex items-center gap-3"
                          whileHover={{ x: 10 }}
                        >
                          <achievement.icon className="w-5 h-5 text-purple-400" />
                          <span className="text-sm text-gray-300">
                            {achievement.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* View Profile Button */}
                    <motion.button
                      className="flex items-center gap-2 text-sm text-emerald-400"
                      whileHover={{ x: 5 }}
                    >
                      View Full Profile
                      <ArrowRight className="w-4 h-4 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Modal */}
        <Dialog
          open={!!selectedMember}
          onOpenChange={(open) => {
            if (!open) setSelectedMember(null);
          }}
        >
          <DialogContent className="w-full max-w-3xl mx-auto bg-gray-900/95 backdrop-blur-xl text-white border border-white/10 p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
            {/* Accessible hidden title for screen readers */}
            <DialogTitle className="sr-only">Team Member Profile</DialogTitle>
            <AnimatePresence>
              {selectedMember && (
                <motion.div
                  key="modal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="p-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-emerald-400 text-lg">
                        {selectedMember.role}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Background</h4>
                        <p className="text-gray-300">
                          {selectedMember.background}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-white/10 text-sm text-emerald-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Key Projects</h4>
                        {selectedMember.projects.map((project) => (
                          <div key={project.name} className="mb-3">
                            <h5 className="font-medium text-purple-400">
                              {project.name}
                            </h5>
                            <p className="text-sm text-gray-300">
                              {project.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          Impact & Stats
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {Object.entries(selectedMember.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="text-center p-4 bg-white/5 rounded-lg"
                            >
                              <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                                {value}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-400 capitalize">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Philosophy</h4>
                        <blockquote className="text-gray-300 italic border-l-2 border-emerald-400 pl-4">
                          {selectedMember.quote}
                        </blockquote>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="w-full sm:flex-1 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500">
                          <Linkedin className="w-4 h-4 mr-2" />
                          Connect
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full sm:flex-1 border-white/10 hover:bg-white/10"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PremiumTeam;
