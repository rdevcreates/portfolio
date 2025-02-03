"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/background-3.jpg')" }}
    >
      {/* Overlay hitam dengan opacity lebih tinggi */}
      <div className="absolute inset-0 bg-black/90"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FloatingLabelInput
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FloatingLabelInput
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FloatingLabelTextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
          >
            <Send size={20} />
            {submitted ? "Sent!" : "Send Message"}
          </motion.button>
        </form>

        <div className="mt-6 text-white flex flex-col items-center gap-4">
          <ContactItem icon={Mail} text="rudiyat_ti@gmail.com" />
          <ContactItem icon={Phone} text="+628 517 954 8345" />
          <ContactItem
            icon={MapPin}
            text="Sambas, Kalimantan Barat, Indonesia"
          />
        </div>
      </motion.div>
    </section>
  );
}

const FloatingLabelInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
}: {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 bg-white/20 text-white rounded-lg outline-none placeholder-transparent focus:ring-2 focus:ring-red-500 transition"
      placeholder={placeholder}
    />
    <label
      className={`absolute left-3 top-3 text-gray-300 transition-all ${
        value ? "text-xs -top-2 left-2 bg-red-500 px-2 rounded-md" : ""
      }`}
    >
      {placeholder}
    </label>
  </div>
);

const FloatingLabelTextArea = ({
  name,
  placeholder,
  value,
  onChange,
  required,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <div className="relative">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={4}
      className="w-full p-3 bg-white/20 text-white rounded-lg outline-none placeholder-transparent focus:ring-2 focus:ring-red-500 transition"
      placeholder={placeholder}
    ></textarea>
    <label
      className={`absolute left-3 top-3 text-gray-300 transition-all ${
        value ? "text-xs -top-2 left-2 bg-red-500 px-2 rounded-md" : ""
      }`}
    >
      {placeholder}
    </label>
  </div>
);

const ContactItem = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center gap-2 bg-white/10 p-3 rounded-lg shadow-md"
  >
    <Icon size={20} className="text-white" />
    <span>{text}</span>
  </motion.div>
);
