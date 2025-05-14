"use client";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-6">
          Interested in working together or have a question? Feel free to reach
          out!
        </p>

        <div className="space-y-4">
          <p className="text-lg">
            📧{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-blue-600 underline"
            >
              youremail@example.com
            </a>
          </p>
          <p className="text-lg">
            💼{" "}
            <a
              href="https://www.linkedin.com/in/yourname"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p className="text-lg">
            🐙{" "}
            <a
              href="https://github.com/yourusername"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
