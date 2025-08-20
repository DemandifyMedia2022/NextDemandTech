"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-8 md:px-16 pt-20 pb-10 overflow-hidden">
      {/* Top section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Logo + CTA */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Demand<span className="text-purple-500">Tech</span>
          </h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold"
            >
              Let’s Talk →
            </Link>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 md:gap-10 text-lg">
          {links.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <Link href={link.href} className="relative">
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r from-purple-600/40 via-pink-500/40 to-purple-600/40 my-12" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} DemandTech. All rights reserved.</p>

        {/* Socials */}
        <div className="flex gap-5">
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <FaLinkedin className="w-5 h-5 hover:text-purple-400 transition-colors" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <FaTwitter className="w-5 h-5 hover:text-purple-400 transition-colors" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <FaInstagram className="w-5 h-5 hover:text-purple-400 transition-colors" />
          </motion.a>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-transparent blur-3xl -z-10" />
    </footer>
  );
}
