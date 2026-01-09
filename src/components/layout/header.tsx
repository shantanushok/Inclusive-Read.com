"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#tutorial", label: "Tutorial" },
    { href: "#installation", label: "Installation" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setMobileMenuOpen(false)}>
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold">InclusiveRead Hub</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" asChild>
                <a href="/extension.zip" download>Get Extension</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-0 top-16 z-40 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-y-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80"
          )}
        >
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {link.label}
                </Link>
                ))}
            </nav>
            <Button asChild>
                <a href="/extension.zip" download onClick={() => setMobileMenuOpen(false)}>Get Extension</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
