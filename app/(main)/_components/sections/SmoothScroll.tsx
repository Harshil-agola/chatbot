"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
      infinite: false,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // 2. Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll(
      ".motion-reveal, .scroll-reveal, .motion-scale, .scroll-scale",
    );
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    // 3. Smooth Anchor Links Navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const targetAnchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!targetAnchor) return;
      const href = targetAnchor.getAttribute("href");
      if (!href || href === "#") return;
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement as HTMLElement, {
          offset: -70,
          duration: 1.2,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      revealObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
