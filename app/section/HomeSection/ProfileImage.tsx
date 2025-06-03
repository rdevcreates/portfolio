import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      className="w-[200px] md:w-[250px] flex justify-center"
    >
      <div className="relative w-[250px] h-[250px] rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-2 shadow-lg">
        <Image
          src="/assets/image/profile.png"
          width={250}
          height={250}
          alt="Profile Picture"
          className="rounded-full border-4 border-white/20 shadow-lg"
          priority={true}
        />
      </div>
    </motion.div>
  );
}