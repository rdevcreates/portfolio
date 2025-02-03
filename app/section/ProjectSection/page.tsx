"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Digital Guest Book",
    description:
      "A face recognition-based guest book system for Balai Besar POM Pontianak.",
    link: "",
    image: "/assets/img/digital-guest-book-screenshot.png", // Screenshot panjang
  },
  {
    title: "School Management System",
    description:
      "A Filament-based admin dashboard to manage student data, subjects, and grades for SMK Negeri 1 Balai - Batang Tarang",
    link: "https://smkn1balai.sch.id",
    embed: "https://smkn1balai.sch.id", // Link untuk di-embed
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio showcasing skills, experience, and projects.",
    image: "/assets/img/portfolio-screenshot.png", // Screenshot panjang
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white text-center mb-8"
      >
        <FolderOpen className="inline-block mr-2 text-red-400" size={32} />{" "}
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl shadow-gray-700/30 p-6 flex flex-col items-start gap-4 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>

            {/* Menampilkan screenshot panjang dengan scroll */}
            {project.image && (
              <div className="relative w-full max-h-96 overflow-y-auto cursor-pointer transition-transform duration-300">
                <img
                  src={project.image}
                  alt="Project Screenshot"
                  className="w-full object-contain"
                />
              </div>
            )}

            {/* Menampilkan embed untuk School Management System */}
            {project.embed && (
              <div className="relative w-full h-96 overflow-hidden">
                <iframe
                  src={project.embed}
                  title={project.title}
                  className="w-full h-full border-none"
                  style={{ borderRadius: "8px" }}
                ></iframe>
              </div>
            )}

            <a
              href={project.link}
              className="mt-auto text-red-400 hover:text-red-300 transition-colors"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
