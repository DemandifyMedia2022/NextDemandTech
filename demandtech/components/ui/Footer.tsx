"use client";

import { motion } from "framer-motion";
import Link from "next/link";


import { FaLinkedin, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
import Button2 from "./Button2";
import Button3 from "./Button3";

const linkSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/about/blogs" },
      { label: "Case Studies", href: "/about/case-studies" },
      { label: "Clients", href: "/about/clients" },
      { label: "Resources", href: "/about/resources" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "GDPR", href: "/gdpr" },
      { label: "CCPA", href: "/ccpa" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (



<footer className="relative bg-#F0F1FA text-gray-800 pt-40 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        {/* Logo + Newsletter */}
        {/* <div className="space-y-6 col-span-1 md:col-span-2 lg:col-span-1">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-blue-600"></span>
          </h1>
          <p className="text-gray-500">
            Stay ahead of the curve. Get the latest marketing insights and trends delivered to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            >
              <FaArrowRight />
            </button>
          </form> 
        </div> */}

        {/* Navigation Links */}
        {linkSections.map((section) => (
          <div key={section.title} className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <motion.div whileHover={{ x: 4 }} className="relative group">
                    <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-12" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} DemandTech. All rights reserved.</p>

        {/* Socials */}
        <div className="flex gap-5">
          <motion.a whileHover={{ scale: 1.2, color: '#2563EB' }} href="https://www.linkedin.com/company/demandify-media/mycompany/" className="text-gray-500">
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, color: '#2563EB' }} href="https://x.com/Demandifymedia" className="text-gray-500">
            <FaTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, color: '#2563EB' }} href="https://www.instagram.com/demandify_media/" className="text-gray-500">
            <FaInstagram className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
      </div>
    </footer>
  );
}
