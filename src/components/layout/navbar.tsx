"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b shadow-lg ${
        isScrolled
          ? "bg-black/80 border-white/10 shadow-md"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with colorful robot icon from React Icons */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaRobot className="w-8 h-8 bg-clip-text text-white" />
          </motion.div>
          <span className="text-white text-xl font-bold hover:text-gray-300">
            Agentia World
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#technology"
            className="text-gray-300 hover:text-white transition relative after:block after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all"
          >
            Technology
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-white transition relative after:block after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white transition relative after:block after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all"
          >
            Contact
          </Link>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 text-white"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg p-6 flex flex-col items-center gap-6 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link href="#technology" className="text-gray-300 hover:text-white text-lg">
          Technology
        </Link>
        <Link href="#pricing" className="text-gray-300 hover:text-white text-lg">
          Pricing
        </Link>
        <Link href="#contact" className="text-gray-300 hover:text-white text-lg">
          Contact
        </Link>
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 text-white"
        >
          Get Started
        </Button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
