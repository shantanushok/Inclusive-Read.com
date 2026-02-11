"use client";

import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#tutorial", label: "Tutorial" },
    { href: "#installation", label: "Installation" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main footer */}
        <div className="py-20">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5"
            >
              <Link href="/" className="inline-flex items-center gap-2.5">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-medium text-[15px] tracking-tight">
                  InclusiveRead
                </span>
              </Link>
              <p className="mt-6 text-white/40 text-sm leading-relaxed max-w-sm">
                A free Chrome extension built for neurodivergent minds making the web accessible for people with ADHD, Autism, Dyslexia, and more.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3"
            >
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
                Navigation
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2"
            >
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
                Download
              </h4>
              <a
                href="/extension.zip"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-black bg-primary rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Extension
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[11px] text-white/20 tracking-wide">
            © {currentYear} InclusiveRead.
          </p>
          <p className="text-[11px] text-white/20 tracking-wide font-editorial italic">
            Built for neurodivergent minds, by people who understand.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
