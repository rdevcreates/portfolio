"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Instagram, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProfileImage = dynamic(() => import("./ProfileImage"), { ssr: false });

export default function HomeSection() {
  const texts = ["Web Developer", "Full-Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[loopIndex % texts.length];
    const updateText = () => {
      setDisplayText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(updateText, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/assets/img/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-4xl w-full text-white gap-8"
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-lg text-gray-400">Hello World, I'm</p>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Rudiyat
          </h1>
          <p className="text-xl font-medium mt-2 text-gray-300">
            {displayText}
            <span className="animate-blink">|</span>
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {[
              {
                href: "https://www.linkedin.com/in/yourprofile",
                icon: Linkedin,
              },
              {
                href: "https://www.instagram.com/yourprofile",
                icon: Instagram,
              },
              { href: "mailto:your.email@example.com", icon: Mail },
              { href: "https://github.com/yourgithub", icon: Github },
            ].map(({ href, icon: Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-3 bg-white/10 border border-white/20 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <Icon size={24} className="text-white" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
          >
            Hire Me
          </motion.button>
        </motion.div>

        <ProfileImage />
      </motion.div>
    </section>
  );
}
