'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-transparent px-6 overflow-hidden">
      
      {/* Background Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#1A2FFB] rounded-full blur-[120px] opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-[100px] opacity-20"
      />

      {/* Hero Content */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold font-['Clash_Display'] text-white leading-tight"
      >
        Empowering Businesses <br />
        <span className="text-[#1A2FFB]">with Next-Gen Tech Solutions</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
      >
        We deliver cutting-edge solutions that drive growth, innovation, and efficiency for your business.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 flex gap-4"
      >
        <Link href="/get-started">
          <button className="bg-[#1A2FFB] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
        <Link href="/about">
          <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </Link>
      </motion.div>

      {/* Floating Icons */}
      <motion.img
        src="/next.svg"
        alt="Next"
        className="absolute top-32 right-20 w-10 h-10 opacity-80"
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.img
        src="/next.svg"
        alt="Next"
        className="absolute bottom-32 left-20 w-10 h-10 opacity-80"
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      />
    </section>
  );
}
