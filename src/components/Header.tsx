import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
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
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              Skills
            </Link>
            <Link
              href="#certifications"
              className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              Certifications
            </Link>
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
