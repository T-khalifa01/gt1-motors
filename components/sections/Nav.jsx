"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const heroHeight = hero.offsetHeight;
      const scrolledThroughHero = heroHeight - heroBottom; 
      const progress = scrolledThroughHero / heroHeight;

      setIsVisible(progress >= 0.9);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between border-b border-white/10 bg-background/90 px-6 backdrop-blur-md transition-all duration-400 ease-in-out md:px-12 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Logo Wrapper */}
      <Link 
        href="#home" 
        aria-label="GT1 Motors Home"
        // className="flex items-center text-text-primary transition-colors duration-200 hover:text-accent"
        className="flex items-center transition-opacity hover:opacity-80"
      >
        <Image
          src="/logo-straight.svg"
          alt="GT1 Motors Logo"
          width={1278}
          height={179}
          priority // High priority preload for instant rendering
          className="h-6 md:h-7 w-auto"
        />

      </Link>

      {/* Navigation Links */}
      <ul className="flex list-none gap-8">
        <li className="hidden md:block">
          <Link
            href="#about"
            className="font-body text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-text-muted transition-colors duration-200 hover:text-accent"
          >
            About
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            href="#faq"
            className="font-body text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-text-muted transition-colors duration-200 hover:text-accent"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="font-body text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-text-muted transition-colors duration-200 hover:text-accent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}