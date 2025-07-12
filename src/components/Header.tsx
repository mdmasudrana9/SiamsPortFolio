"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            Siam&apos;s
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#certifications" className="nav-link">
              Certifications
            </Link>
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={handleOpen}
          >
            {open ? (
              <X className="w-16 h-16" />
            ) : (
              <Menu className="w-16 h-16" />
            )}
          </Button>
        </nav>
      </div>

      {/* Slide-In Mobile Menu from Left */}
      <div
        className={`fixed top-16 left-0 w-full h-full  text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-6">
          <Link
            href="#about"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#certifications"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Certifications
          </Link>
          <Button
            asChild
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300"
          >
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
