"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, I am <span className="text-blue-600">YourName</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600">
          Frontend Developer specializing in React & Next.js
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
