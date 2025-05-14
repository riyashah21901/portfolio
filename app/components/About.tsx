"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate frontend developer with experience building
          responsive, high-performance websites and web apps using{" "}
          <strong>React</strong> and
          <strong> Next.js</strong>. I enjoy turning complex problems into
          user-friendly interfaces, and I am always looking for opportunities to
          learn and grow in modern web technologies.
        </p>
        <p className="mt-4 text-gray-600">
          Tech Stack: React, Next.js, TypeScript, Tailwind CSS, JavaScript, Git,
          REST APIs, and more.
        </p>
      </div>
    </section>
  );
};

export default About;
