"use client";

import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Features", href: "#features" },
  { name: "Templates", href: "#templates" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop breakpoint or when Escape key is pressed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="relative h-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-4 z-10">
            <Link href="/" className="flex items-center gap-2 rounded-lg">
              <Image
                src="/assets/logo.svg"
                alt="Invoicely Brand logo"
                width={120}
                height={32}
                style={{ width: "auto" }}
                className="h-7 sm:h-8 object-contain brightness-125 transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Centered on Desktop */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-5 lg:gap-8 absolute left-1/2 -translate-x-1/2 z-10"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                className="px-2 py-1 text-sm font-semibold text-foreground-secondary hover:text-foreground transition-colors relative group"
                href={item.href}
              >
                {item.name}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Hamburger Menu */}
          <div className="flex items-center gap-2.5 sm:gap-4 z-10">
            <a
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 bg-foreground text-dark-cta-text text-sm font-semibold rounded-full shadow-lg shadow-black/20 hover:bg-foreground-secondary active:scale-95 transition-all"
              href="#pricing"
            >
              Get Started Free
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center p-2 rounded-xl text-foreground-secondary hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-controls="fullscreen-mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div
        id="fullscreen-mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 md:hidden bg-background/98 backdrop-blur-2xl overscroll-contain transition-opacity duration-250 flex flex-col justify-between ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-sky/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header inside Full-Screen Menu */}
        <div className="relative z-10 h-16 px-4 sm:px-6 flex items-center justify-between border-b border-white/10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <Image
              src="/assets/logo.svg"
              alt="Invoicely Brand logo"
              width={120}
              height={32}
              style={{ width: "auto" }}
              className="h-7 sm:h-8 object-contain brightness-125"
            />
          </Link>

          <button
            type="button"
            className="p-2 rounded-xl text-foreground-secondary hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links - Top-aligned, Natural Flow */}
        <div className="relative z-10 flex-1 flex flex-col pt-6 pb-6 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-1 w-full divide-y divide-white/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 px-1 text-[15px] font-medium text-foreground-secondary hover:text-foreground transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-foreground-muted/50" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA Button */}
        <div className="relative z-10 px-6 pb-6 pt-4 border-t border-white/10 w-full">
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 px-5 py-3.5 bg-primary text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover active:scale-98 transition-all"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
