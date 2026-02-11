"use client";

import Link from "next/link";
import { BookOpen, Menu, X, ArrowUpRight, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["overview", "features", "tutorial", "installation"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#overview", label: "Overview", id: "overview" },
    { href: "#features", label: "Features", id: "features" },
    { href: "#tutorial", label: "Tutorial", id: "tutorial" },
    { href: "#installation", label: "Install", id: "installation" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group relative z-10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/15">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold text-[14px] tracking-[-0.01em] text-white/90">
                InclusiveRead
              </span>
            </Link>

            {/* Center Nav — floating pill with active indicator */}
            <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * i + 0.3, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "relative px-4 py-[7px] text-[13px] font-medium rounded-full transition-all duration-300 block",
                          isActive
                            ? "text-white"
                            : "text-white/35 hover:text-white/70"
                        )}
                      >
                        {/* Active background pill */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute inset-0 rounded-full bg-white/[0.08]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Right — CTA + hamburger */}
            <div className="flex items-center gap-3 relative z-10">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                href="/extension.zip"
                download
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[12px] font-semibold text-black bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </motion.a>

              <button
                className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu — full overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full px-8">
              <nav className="space-y-2 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                      delay: 0.06 * i + 0.1,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-4xl font-bold tracking-[-0.02em] text-white/30 hover:text-white transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-12"
              >
                <a
                  href="/extension.zip"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-black bg-primary rounded-full"
                >
                  <Download className="w-4 h-4" />
                  Download Extension
                </a>
              </motion.div>

              {/* Bottom tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 text-[11px] text-white/15 tracking-wider font-editorial italic"
              >
                Built for neurodivergent minds.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
