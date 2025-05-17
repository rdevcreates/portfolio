"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  House,
  HandPlatter,
  FolderDot,
  Contact,
  FolderOpen,
} from "lucide-react";

const navItems = [
  { href: "#home", icon: <House size={24} />, label: "Home" },
  { href: "#skills", icon: <FolderDot size={24} />, label: "Skills" },
  { href: "#projects", icon: <FolderOpen size={24} />, label: "Projects" },
  { href: "#services", icon: <HandPlatter size={24} />, label: "Services" },
  // { href: "#contact", icon: <Contact size={24} />, label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-6 
    bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl shadow-gray-700/40 p-1"
      style={{ top: "calc(50% - 100px)" }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex justify-center"
        >
          <Link
            href={item.href}
            className={`p-3 rounded-lg transition-all duration-300 ${
              activeSection === item.href
                ? "bg-white/20 text-red-400 scale-110"
                : "text-white hover:text-gray-300"
            }`}
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navbar;
