"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center">
      <motion.div
      initial={{opacity: 0, scale:0.8}}
      animate={{opacity: 1, scale:1}}
      transition={{duration: 0.5}}
      >
      <Image
        src="/images/profile/me.jpg"
        alt="Tungjai Mady (TJ)"
        width={275}
        height={275}
        className="rounded-full mb-8 h-auto"
      />
      </motion.div>
      <motion.h1 
      initial={{opacity: 0, y:20}}
      animate={{opacity: 1, y:0}}
      transition={{duration: 0.5}}
      className="text-5xl font-bold text-white">Tungjai Mady (TJ)</motion.h1>
      <motion.p 
      initial={{opacity: 0, y:20}}
      animate={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay: 0.5}}
      className="text-xl text-gray-400 mt-4">Software Developer
      </motion.p>
      <motion.div 
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      transition={{ duration: 0.5, delay:0.6}}

      className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="/documents/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Resume
        </a>

        <a/>
      </motion.div>
    </section>
  );
}
