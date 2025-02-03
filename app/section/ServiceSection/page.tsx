"use client";

import { motion } from "framer-motion";
import { Code, Server, Layout, Database, Link } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Membangun website responsif dan interaktif dengan teknologi modern.",
      icon: Code,
    },
    {
      title: "Full-Stack Development",
      description:
        "Mengembangkan frontend & backend dengan integrasi yang seamless.",
      icon: Server,
    },
    {
      title: "UI/UX Design",
      description:
        "Merancang tampilan antarmuka yang menarik dan user-friendly.",
      icon: Layout,
    },
    {
      title: "Database Management",
      description:
        "Mengelola dan mengoptimalkan database untuk performa terbaik.",
      icon: Database,
    },
    {
      title: "API Development",
      description: "Membuat API yang cepat dan aman untuk kebutuhan aplikasi.",
      icon: Link,
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/assets/img/background-3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 text-4xl font-extrabold text-white mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        My Services
      </motion.h2>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </section>
  );
}

const ServiceCard = ({
  service,
}: {
  service: { title: string; description: string; icon: any };
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent 
      after:absolute after:inset-0 after:rounded-2xl after:border after:border-white/10 flex flex-col items-center text-center gap-4"
    >
      <service.icon size={40} className="text-white" />
      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
      <p className="text-white/80">{service.description}</p>
    </motion.div>
  );
};
