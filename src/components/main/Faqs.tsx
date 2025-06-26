"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes AI Agents different from traditional AI solutions?",
      answer:
        "AI Agents utilizes advanced neural networks that evolve and adapt in real-time, offering unparalleled automation and intelligence. Our multi-agent system allows for complex task coordination, while our quantum-ready architecture ensures future scalability.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    },
    {
      question: "How secure is the AI Agents platform?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with international data protection standards. Your data is protected by advanced AI-powered security protocols.",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    },
    {
      question: "Can I customize the AI agents for my specific needs?",
      answer:
        "Absolutely! Our AI agents are fully customizable through our intuitive interface. You can define specific behaviors, set custom parameters, and integrate with your existing workflows. Our platform adapts to your unique requirements.",
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 technical support, comprehensive documentation, and dedicated account managers for enterprise clients. Our community forum and regular webinars provide additional resources for learning and troubleshooting.",
      icon: <Sparkles className="w-5 h-5 text-pink-400" />,
    },
    {
      question: "How does the pricing structure work?",
      answer:
        "We offer flexible pricing tiers based on your usage and needs. From startup-friendly plans to enterprise solutions, you only pay for what you use. All plans include core features with premium capabilities available in higher tiers.",
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden py-24">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        initial={{ y: 0 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-emerald-500/5 animate-pulse" />
      </motion.div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about AI Agents. Can&apos;t find an
              answer? Feel free to contact us.
            </p>
          </motion.div>
        </div>

        {/* FAQs Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredFaq(index)}
              onHoverEnd={() => setHoveredFaq(null)}
            >
              <motion.div
                className={`relative overflow-hidden rounded-lg border border-white/10 transition-colors duration-300 ${
                  openIndex === index ? "bg-white/10" : "bg-white/5"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                {/* Question Header */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span className="text-lg font-medium">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 pointer-events-none"
                  animate={{
                    opacity: hoveredFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Button className="bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 transition-all duration-300">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFAQs;
