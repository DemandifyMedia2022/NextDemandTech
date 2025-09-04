"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, RefObject } from "react";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface MobileNavbarProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNavbar({ open, onClose }: MobileNavbarProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useOutsideClick(panelRef as unknown as RefObject<HTMLDivElement>, () => open && onClose());

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-white z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            ref={panelRef as unknown as RefObject<HTMLDivElement>}
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white dark:bg-neutral-900 z-[10001] shadow-xl flex flex-col"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <div className="px-4 py-4 border-b bg-[#F0F1FA] border-white flex items-center justify-between">
              <div className="font-semibold">Menu</div>
              <div
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <nav className="p-6 bg-[#F0F1FA]">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-3 py-3 rounded-md text-base font-medium hover:bg-[#F0F1FA]"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto p-3 bg-[#F0F1FA] mb-0">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 rounded-3xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-[#F0F1FA]"
                onClick={onClose}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
