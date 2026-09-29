"use client";

import { FlaskConical } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let userHasScrolled = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 5) userHasScrolled = true;

      if (heroCardRef.current && userHasScrolled) {
        heroCardRef.current.style.animation = "none";
        const heroFactor = Math.min(1, Math.max(0, scrollY / 420));
        const rotateX = (1 - heroFactor) * 16;
        const scale = 0.93 + heroFactor * 0.07;
        const translateY = (1 - heroFactor) * 35;
        heroCardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) scale(${scale}) translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-hero-top via-hero-mid/90 via-55% to-transparent text-foreground pb-16 pt-20 lg:pt-28 lg:pb-24">
      {/* Top Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-112.5 bg-hero-glow rounded-full blur-[140px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-275 mx-auto px-4 lg:px-12 flex flex-col items-center text-center pt-8">
        {/* Animated Neon Border Badge (Chip) */}
        <div
          id="hero-chip"
          className="motion-reveal relative inline-flex p-px rounded-full neon-pill-border mb-6 transition-all select-none shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card backdrop-blur-xl text-xs sm:text-[13px] border border-border-subtle shadow-sm">
            <span className="text-primary-subtle/80 font-medium">
              Syncing live:
            </span>
            <span className="text-foreground font-medium">
              10,000+ finance teams active
            </span>
          </div>
        </div>

        {/* Hero Heading */}
        <h1
          id="hero-heading"
          className="motion-reveal text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.12] font-semibold text-foreground tracking-[-0.03em] max-w-4xl"
        >
          Invoicely: Simple Invoicing for Freelancers &amp; Businesses
        </h1>

        {/* Hero Subheading */}
        <p
          id="hero-subheading"
          className="motion-reveal mt-6 text-[15px] sm:text-[17px] leading-[1.6] text-foreground-secondary max-w-2xl font-normal"
        >
          Create, send, and track professional invoices in seconds. Custom
          templates, automatic tax calculations, multi-currency support, and
          payment reminders.
        </p>

        {/* CTA Action Buttons */}
        <div
          id="hero-cta-group"
          className="motion-reveal mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-foreground text-dark-cta-text font-semibold text-[15px] hover:bg-foreground-secondary shadow-lg shadow-black/20 transition-all"
            href="#"
          >
            Start free trial
          </a>

          <a
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-surface-glass-active hover:bg-surface-glass-pill border border-border-strong text-foreground font-medium text-[15px] backdrop-blur-md shadow-sm transition-all"
            href="#how-it-works"
          >
            <span>See how it works</span>
            <span className="text-[18px] leading-none">›</span>
          </a>
        </div>

        {/* Hero Showcase Card with Neon Border & Dashboard Image (3D Scroll Perspective + Load Entrance) */}
        <div
          ref={heroCardRef}
          id="hero-showcase-card"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          className="hero-card-entrance w-full max-w-5xl mt-12 relative group"
        >
          {/* Outer Ambient Glow with Bottom Fade Mask */}
          <div
            className="absolute -inset-2 rounded-[30px] bg-linear-to-r from-brand/40 via-accent-sky/40 to-accent-emerald/30 opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
          />

          {/* Card Shell with Neon Border Frame & Smooth Bottom Gradient Mask */}
          <div
            className="relative p-[1.5px] rounded-3xl neon-card-border shadow-2xl shadow-black/80"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 35%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.25) 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 35%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.25) 85%, transparent 100%)",
            }}
          >
            <div className="relative rounded-[22.5px] overflow-hidden bg-surface-container-low border border-border-glass shadow-lg">
              {/* High-Fidelity Dashboard Interface Image */}
              <div className="relative overflow-hidden bg-surface-preview">
                <Image
                  src="/assets/dashboard_preview.jpg"
                  alt="Invoicely Live Invoicing Dashboard Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover block select-none transform transition-transform duration-700"
                  priority
                />

                {/* Gloss Reflection Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-transparent via-surface-glass/60 to-surface-glass" />

                {/* Bottom Dark Blend Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-background via-background/70 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Ambient Floor Glow */}
          <div className="absolute inset-x-16 -bottom-6 h-28 bg-linear-to-t from-brand/20 via-accent-sky/10 to-transparent blur-3xl pointer-events-none" />
        </div>

        {/* Client Logos Row */}
        <div className="motion-reveal delay-300 w-full mt-16 lg:mt-20 pt-6">
          <p className="text-[13px] tracking-normal text-foreground-muted font-normal mb-8">
            Trusted by modern enterprise teams running complex global billing
            programs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all text-foreground/80">
            <span className="text-[20px] font-bold tracking-tight font-mono">
              Milliman
            </span>
            <span className="text-[15px] font-bold tracking-[0.2em] uppercase">
              WHITE &amp; CASE
            </span>
            <div className="text-left leading-tight font-serif">
              <div className="text-[13px] font-semibold tracking-wide">
                Debevoise
              </div>
              <div className="text-[13px] font-semibold tracking-wide">
                &amp; Plimpton
              </div>
            </div>
            <span className="text-[18px] font-serif font-bold tracking-tight">
              CLYDE&amp;CO
            </span>
            <div className="flex items-center gap-1.5">
              <FlaskConical className="w-5 h-5" />
              <span className="text-[15px] font-semibold tracking-tight">
                AstraZeneca
              </span>
            </div>
            <span className="text-[20px] font-black tracking-widest uppercase">
              SCANIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
