"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Globe,
  Laptop2,
} from "lucide-react";

const services = [
  {
    title: "Pembuatan Website Instansi & UMKM",
    description:
      "Melayani pembuatan website untuk pemerintahan, sekolah, desa, dan usaha bisnis Anda.",
    icon: Globe,
    color: "text-blue-400",
  },
  {
    title: "Pembuatan Sistem Informasi",
    description:
      "Membuat aplikasi web seperti sistem manajemen sekolah, kasir, keuangan, absensi, dan lainnya.",
    icon: Laptop2,
    color: "text-green-400",
  }
  
 // {
  title: "Konsultasi & Pengembangan Proyek Web Akademik",
  description:
    "Memberikan bantuan teknis dalam pengembangan sistem web untuk tugas akhir atau proyek penelitian menggunakan framework modern.",
  icon: FileText,
  color: "text-pink-400",
}//
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 py-20"
      style={{ backgroundImage: "url('/assets/img/background-3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-4xl font-extrabold text-white mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Layanan Kami
      </motion.h2>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 
            flex flex-col items-center text-center gap-4"
          >
            <service.icon size={48} className={`${service.color} mb-2`} />
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="text-white/80 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
