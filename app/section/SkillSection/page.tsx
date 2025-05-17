"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiLaravel,
  SiBootstrap,
  SiJavascript,
  SiPython,
  SiPhp,
  SiMysql,
} from "react-icons/si";

const skills = {
  frameworks: [
    {
      name: "React.js",
      icon: SiReact,
      description: "Library JavaScript populer untuk membuat UI interaktif.",
      color: "#61dafb",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      description: "Framework CSS cepat dan fleksibel untuk desain responsif.",
      color: "#38b2ac",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      description: "Kerangka kerja CSS populer untuk desain cepat dan responsif.",
      color: "#7952b3",
    },
    {
      name: "Flask",
      icon: SiFlask,
      description: "Framework Python ringan untuk backend web.",
      color: "#000000",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      description: "Framework PHP modern untuk pengembangan aplikasi web.",
      color: "#ff2d20",
    },
  ],
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: SiJavascript,
      description: "Bahasa pemrograman utama untuk website interaktif.",
      color: "#f7df1e",
    },
    {
      name: "Python",
      icon: SiPython,
      description: "Bahasa serbaguna populer untuk AI dan backend.",
      color: "#3776ab",
    },
    {
      name: "PHP",
      icon: SiPhp,
      description: "Bahasa server-side untuk pengembangan website dinamis.",
      color: "#777bb4",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      description: "Sistem database relasional yang banyak digunakan.",
      color: "#4479a1",
    },
  ],
};

export default function SkillSection() {
  return (
    <section
  id="skills"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
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
    className="relative z-10 mb-12 text-4xl font-extrabold text-white tracking-wide"
  >
    Keahlian Saya
  </motion.h2>

  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full"
  >
    <SkillCard title="Frameworks" skills={skills.frameworks} />
    <SkillCard title="Programming Languages" skills={skills.programmingLanguages} />
  </motion.div>
</section>
  );
}

const SkillCard = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: any; description: string; color: string }[];
}) => {
  const skillList = useMemo(() => skills, [skills]);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.25)" }}
      transition={{ type: "spring", stiffness: 150 }}
      className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg"
    >
      <h3 className="mb-6 text-xl font-semibold text-white border-b border-white/30 pb-2">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillList.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-colors cursor-default"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <skill.icon
              size={48}
              style={{ color: skill.color }}
              className="mb-3"
              aria-label={`${skill.name} icon`}
              title={skill.name}
            />
            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
            <p className="mt-1 text-gray-300 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
