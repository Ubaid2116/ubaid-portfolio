"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumFooter = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  // State to hold window dimensions for particle animations
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize dimensions on mount
    const updateDimensions = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API", "Documentation", "Updates"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Contact"],
    },
    {
      title: "Resources",
      links: ["Community", "Support", "Terms", "Privacy", "Status"],
    },
  ];

  // Added a "color" property to assign a vibrant color to each icon.
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "text-purple-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-blue-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-blue-700" },
    { icon: Mail, href: "#", label: "Email", color: "text-pink-500" },
  ];

  return (
    // Dark wrapper forces dark mode regardless of system theme.
    <div className="dark">
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10 animate-pulse" />
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [
                  Math.random() * dimensions.width,
                  Math.random() * dimensions.width,
                ],
                y: [
                  Math.random() * dimensions.height,
                  Math.random() * dimensions.height,
                ],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Newsletter Section */}
          <div className="mb-16">
            <motion.div
              className="max-w-xl mx-auto text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Join Our AI Revolution</h3>
              <p className="text-gray-400">
                Stay updated with the latest in AI technology and product updates
              </p>

              <div className="flex gap-2 mt-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
                />
                <Button
                  className="px-6 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Agentia World
              </motion.div>
              <p className="text-gray-400">
                Empowering the future with intelligent AI solutions.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <motion.li
                      key={link}
                      onHoverStart={() => setHoveredLink(link)}
                      onHoverEnd={() => setHoveredLink(null)}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white flex items-center gap-1 group transition-colors duration-300"
                      >
                        {link}
                        <motion.span
                          animate={{
                            x: hoveredLink === link ? 5 : 0,
                            opacity: hoveredLink === link ? 1 : 0,
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="pt-8 mt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>by UBAID</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumFooter;
