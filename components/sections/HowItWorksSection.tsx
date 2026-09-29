"use client";

import { CreditCard, FilePlus, Send, UserPlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const [fannedOut, setFannedOut] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < vh - 60 && rect.bottom > 60;
      setFannedOut(isVisible);
      if (!isVisible) setActiveCard(null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardClick = (
    e: React.MouseEvent | React.KeyboardEvent,
    index: number,
  ) => {
    e.stopPropagation();
    setFannedOut(true);
    setActiveCard((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleDocClick = () => {
      setActiveCard(null);
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full overflow-hidden py-20 lg:py-28"
    >
      {/* Radial ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 100%), radial-gradient(circle at 85% 55%, rgba(16, 185, 129, 0.04) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-360 mx-auto px-4 lg:px-12 space-y-12">
        {/* Section Heading */}
        <div className="motion-reveal text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold text-foreground tracking-tight leading-tight">
            From sign up to payout in 4 simple steps
          </h2>
          <p className="text-base text-foreground-secondary">
            No complicated bookkeeping manual required. Click or hover the
            interactive deck below to explore the steps.
          </p>
        </div>

        {/* Interactive Fan-Out Deck (Spectrum UI Animated Card Stack) */}
        <div className="relative max-w-4xl mx-auto py-8">
          <div
            ref={deckRef}
            id="spectrum-deck-container"
            className={`spectrum-fan-deck min-h-125 ${fannedOut ? "fanned-out" : ""}`}
            title="Click or hover any card to inspect"
          >
            {/* Card 1: Step 01 */}
            <div
              role="button"
              tabIndex={0}
              className={`spectrum-deck-card ${activeCard === 0 ? "is-active" : ""}`}
              onClick={(e) => handleCardClick(e, 0)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(e, 0);
                }
              }}
            >
              <div className="w-full h-full rounded-[28px] border border-neutral-800 bg-surface-deck p-8 flex flex-col justify-between items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:border-brand/40 transition-all select-none group">
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 border border-brand/30 text-brand-subtle flex items-center justify-center shadow-inner">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-[11px] tracking-wider text-brand-subtle bg-brand/20 border border-brand-light/40 px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
                    STEP 01
                  </span>
                </div>
                <div className="my-auto space-y-3 px-2">
                  <h3 className="text-[24px] sm:text-[26px] font-bold tracking-tight text-foreground group-hover:text-brand-subtle transition-colors">
                    Sign Up in Seconds
                  </h3>
                  <p className="text-[13.5px] text-foreground-muted leading-relaxed max-w-60 mx-auto font-normal">
                    Create your account with zero credit card needed. Instant
                    workspace configured with your business currency.
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-border-subtle flex items-center justify-center gap-1.5 text-[12px] font-medium text-brand-subtle">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Instant activation</span>
                </div>
              </div>
            </div>

            {/* Card 2: Step 02 */}
            <div
              role="button"
              tabIndex={0}
              className={`spectrum-deck-card ${activeCard === 1 ? "is-active" : ""}`}
              onClick={(e) => handleCardClick(e, 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(e, 1);
                }
              }}
            >
              <div className="w-full h-full rounded-[28px] border border-neutral-800 bg-surface-deck p-8 flex flex-col justify-between items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:border-accent-sky/40 transition-all select-none group">
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-sky/15 border border-accent-sky/30 text-accent-sky-subtle flex items-center justify-center shadow-inner">
                    <FilePlus className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-[11px] tracking-wider text-accent-sky-subtle bg-accent-sky/20 border border-accent-sky/40 px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-sky animate-pulse" />
                    STEP 02
                  </span>
                </div>
                <div className="my-auto space-y-3 px-2">
                  <h3 className="text-[24px] sm:text-[26px] font-bold tracking-tight text-foreground group-hover:text-accent-sky-subtle transition-colors">
                    Add Client &amp; Items
                  </h3>
                  <p className="text-[13.5px] text-foreground-muted leading-relaxed max-w-60 mx-auto font-normal">
                    Smart autofill pulls previous client addresses and saved
                    services for lightning-fast itemization.
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-border-subtle flex items-center justify-center gap-1.5 text-[12px] font-medium text-accent-sky-subtle">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Smart client memory</span>
                </div>
              </div>
            </div>

            {/* Card 3: Step 03 */}
            <div
              role="button"
              tabIndex={0}
              className={`spectrum-deck-card ${activeCard === 2 ? "is-active" : ""}`}
              onClick={(e) => handleCardClick(e, 2)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(e, 2);
                }
              }}
            >
              <div className="w-full h-full rounded-[28px] border border-neutral-800 bg-surface-deck p-8 flex flex-col justify-between items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:border-brand/40 transition-all select-none group">
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 rounded-xl bg-brand/15 border border-brand/30 text-brand-subtle flex items-center justify-center shadow-inner">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-[11px] tracking-wider text-brand-subtle bg-brand/20 border border-brand-light/40 px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
                    STEP 03
                  </span>
                </div>
                <div className="my-auto space-y-3 px-2">
                  <h3 className="text-[24px] sm:text-[26px] font-bold tracking-tight text-foreground group-hover:text-brand-subtle transition-colors">
                    Send Live Invoice
                  </h3>
                  <p className="text-[13.5px] text-foreground-muted leading-relaxed max-w-60 mx-auto font-normal">
                    Send via branded automated email, generate a direct payment
                    link, or download an ultra-crisp vector PDF.
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-border-subtle flex items-center justify-center gap-1.5 text-[12px] font-medium text-brand-subtle">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Hosted pay links &amp; PDF</span>
                </div>
              </div>
            </div>

            {/* Card 4: Step 04 */}
            <div
              role="button"
              tabIndex={0}
              className={`spectrum-deck-card ${activeCard === 3 ? "is-active" : ""}`}
              onClick={(e) => handleCardClick(e, 3)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(e, 3);
                }
              }}
            >
              <div className="w-full h-full rounded-[28px] border border-neutral-800 bg-surface-deck p-8 flex flex-col justify-between items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:border-accent-emerald/40 transition-all select-none group">
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-emerald/15 border border-accent-emerald/30 text-accent-emerald-subtle flex items-center justify-center shadow-inner">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-[11px] tracking-wider text-accent-emerald-subtle bg-accent-emerald/20 border border-accent-emerald/40 px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                    STEP 04
                  </span>
                </div>
                <div className="my-auto space-y-3 px-2">
                  <h3 className="text-[24px] sm:text-[26px] font-bold tracking-tight text-foreground group-hover:text-accent-emerald-subtle transition-colors">
                    Get Paid Faster
                  </h3>
                  <p className="text-[13.5px] text-foreground-muted leading-relaxed max-w-60 mx-auto font-normal">
                    Funds are routed directly into your bank account via Stripe
                    or ACH with automatic payment receipts issued.
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-border-subtle flex items-center justify-center gap-1.5 text-[12px] font-medium text-accent-emerald-subtle">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span>Instant reconciliation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
