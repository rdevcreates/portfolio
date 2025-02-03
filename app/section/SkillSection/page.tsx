"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { Code, Codepen, Code2, Braces } from "lucide-react";

const skills = {
  frameworks: [
    { name: "React.js", icon: Code, description: "JavaScript library for UI" },
    {
      name: "Tailwind CSS",
      icon: Codepen,
      description: "Utility-first CSS framework",
    },
    {
      name: "Flask",
      icon: Code2,
      description: "Lightweight Python web framework",
    },
    {
      name: "Laravel",
      icon: Braces,
      description: "PHP framework for web apps",
    },
  ],
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: Code,
      description: "Versatile scripting language",
    },
    { name: "Python", icon: Code2, description: "Popular for AI & backend" },
    {
      name: "PHP",
      icon: Braces,
      description: "Server-side scripting language",
    },
    { name: "MySQL", icon: Codepen, description: "Relational database system" },
  ],
};

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-lg"
        style={{
          backgroundImage: "url('/assets/img/background-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/90" />

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-4xl font-extrabold text-white mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
        My Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
      >
        <SkillCard title="Frameworks" skills={skills.frameworks} />
        <SkillCard
          title="Programming Languages"
          skills={skills.programmingLanguages}
        />
      </motion.div>
    </section>
  );
}

const SkillCard = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: any; description: string }[];
}) => {
  const skillList = useMemo(() => skills, [skills]);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent 
      after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/10"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative p-4 bg-white/10 rounded-lg shadow-lg border border-white/10 text-center 
            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-t before:from-white/5 before:to-transparent flex flex-col items-center gap-2"
          >
            <skill.icon size={32} className="text-white" />
            <p className="text-lg text-white font-semibold">{skill.name}</p>
            <p className="text-sm text-gray-300">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
