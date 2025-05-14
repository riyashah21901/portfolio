"use client";
import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built with Next.js and Tailwind CSS. Fully responsive and SEO optimized.",
    link: "#", // Replace with your live link
    github: "#", // Replace with your GitHub repo
  },
  {
    title: "E-commerce App",
    description:
      "A shopping site with product filters, cart, and Stripe integration.",
    link: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description: "An analytics dashboard using charts and secure login.",
    link: "#",
    github: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.link}
                      className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      className="text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
