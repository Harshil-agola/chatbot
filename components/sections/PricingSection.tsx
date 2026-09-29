"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-linear-to-b from-background via-surface-card/60 to-background py-20 lg:py-28"
    >
      {/* Ambient Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-360 mx-auto px-4 lg:px-12 space-y-12">
        {/* Section Heading */}
        <div className="motion-reveal text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-foreground tracking-tight leading-tight">
            Simple plans that scale with your business
          </h2>
          <p className="text-[15px] sm:text-[16px] text-foreground-secondary leading-relaxed">
            No hidden transaction markups. Start free and upgrade when your
            revenue demands it.
          </p>

          {/* Billing Toggle Pill */}
          <div
            className="pt-2 inline-flex items-center p-1.5 bg-surface-pill/90 border border-border-medium rounded-full backdrop-blur-xl shadow-lg gap-1"
            id="pricing-toggle-wrap"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer select-none ${
                !isAnnual
                  ? "bg-brand text-foreground shadow-lg shadow-brand/30"
                  : "text-foreground-muted hover:text-foreground-secondary bg-transparent font-medium"
              }`}
              id="billing-monthly"
              type="button"
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 select-none ${
                isAnnual
                  ? "bg-brand text-foreground shadow-lg shadow-brand/30"
                  : "text-foreground-muted hover:text-foreground-secondary bg-transparent font-medium"
              }`}
              id="billing-annual"
              type="button"
            >
              <span>Annual Billing</span>
              <span
                id="billing-discount-badge"
                className={`text-[11px] px-2.5 py-0.5 rounded-full transition-all ${
                  isAnnual
                    ? "font-bold bg-foreground text-brand-dark shadow-sm tracking-wide"
                    : "font-semibold bg-brand/20 text-brand-subtle border border-brand-light/30"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div
          id="pricing-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto pt-4"
        >
          {/* Tier 1: Starter */}
          <div className="motion-scale delay-100 rounded-3xl p-7 lg:p-8 bg-surface-glass hover:bg-surface-glass-hover border border-border-glass hover:border-brand-light/40 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:-translate-y-1">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-foreground">Starter</h3>
                <p className="text-[13.5px] text-foreground-muted">
                  Ideal for newly launching solo freelancers.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline">
                  <span className="font-mono text-[38px] font-bold text-foreground tracking-tight">
                    $0
                  </span>
                  <span className="text-sm text-foreground-muted ml-1.5">
                    / month
                  </span>
                </div>
                <div className="text-xs text-foreground-muted">
                  Free forever • No credit card required
                </div>
              </div>

              <div className="pt-2 border-t border-border-subtle space-y-3.5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-foreground-muted">
                  Included features
                </div>
                <ul className="space-y-3 text-[14px]">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      5 active invoices / month
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      1 clean standard template
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      Vector PDF export
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      Standard email support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <a
                className="w-full py-3 rounded-xl bg-surface-glass-active hover:bg-surface-glass-strong border border-border-medium hover:border-border-hover text-foreground font-semibold text-sm transition-all text-center flex items-center justify-center"
                href="#"
              >
                Get Started Free
              </a>
            </div>
          </div>

          {/* Tier 2: Pro (Featured / Elevated) */}
          <div className="motion-scale delay-200 relative rounded-3xl p-7 lg:p-8 bg-linear-to-b from-pro-start via-pro-mid to-pro-end border-2 border-brand shadow-[0_20px_50px_-10px_rgba(99,102,241,0.4)] flex flex-col justify-between transition-all duration-300 scale-100 lg:-translate-y-3 z-10 hover:shadow-[0_25px_60px_-10px_rgba(99,102,241,0.55)] text-foreground">
            {/* Most Popular Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-linear-to-r from-brand-hover via-brand to-brand-hover text-foreground text-xs font-semibold tracking-wide shadow-lg border border-brand-subtle/40 select-none whitespace-nowrap">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 text-brand-subtle"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>MOST POPULAR</span>
            </div>

            <div className="space-y-6 pt-1">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-foreground">Pro</h3>
                <p className="text-[13.5px] text-brand-subtle/90">
                  For full-time independent consultants &amp; studios.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline">
                  <span
                    className="font-mono text-[38px] font-bold text-foreground tracking-tight"
                    id="pro-price"
                  >
                    {isAnnual ? "$15" : "$19"}
                  </span>
                  <span
                    className="text-sm text-foreground-secondary ml-1.5"
                    id="pro-period"
                  >
                    {isAnnual ? "/ month (billed annually)" : "/ month"}
                  </span>
                </div>
                <div className="text-xs text-brand-subtle font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  <span>14-day free trial included • Cancel anytime</span>
                </div>
              </div>

              <div className="pt-2 border-t border-brand/20 space-y-3.5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-brand-subtle">
                  Everything in Starter, plus:
                </div>
                <ul className="space-y-3 text-[14px]">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/25 border border-brand-light/40 flex items-center justify-center shrink-0 text-brand-subtle">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground font-medium">
                      Unlimited invoices &amp; clients
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/25 border border-brand-light/40 flex items-center justify-center shrink-0 text-brand-subtle">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-brand-muted">
                      All 5 designer templates &amp; customizer
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/25 border border-brand-light/40 flex items-center justify-center shrink-0 text-brand-subtle">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-brand-muted">
                      Automated scheduled payment reminders
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/25 border border-brand-light/40 flex items-center justify-center shrink-0 text-brand-subtle">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-brand-muted">
                      Stripe, PayPal &amp; ACH direct rails
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/25 border border-brand-light/40 flex items-center justify-center shrink-0 text-brand-subtle">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-brand-muted">
                      Client view &amp; telemetry tracking
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <a
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-brand via-brand-hover to-primary-dark hover:from-brand-light hover:to-brand-hover text-foreground font-bold text-sm shadow-[0_10px_25px_rgba(99,102,241,0.5)] hover:shadow-[0_15px_30px_rgba(99,102,241,0.7)] transition-all text-center flex items-center justify-center gap-2"
                href="#"
              >
                <span>Start 14-Day Pro Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tier 3: Business */}
          <div className="motion-scale delay-300 rounded-3xl p-7 lg:p-8 bg-surface-glass hover:bg-surface-glass-hover border border-border-glass hover:border-brand-light/40 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:-translate-y-1">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-foreground">Business</h3>
                <p className="text-[13.5px] text-foreground-muted">
                  For growing agencies and distributed teams.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline">
                  <span
                    className="font-mono text-[38px] font-bold text-foreground tracking-tight"
                    id="biz-price"
                  >
                    {isAnnual ? "$39" : "$49"}
                  </span>
                  <span
                    className="text-sm text-foreground-muted ml-1.5"
                    id="biz-period"
                  >
                    {isAnnual ? "/ month (billed annually)" : "/ month"}
                  </span>
                </div>
                <div className="text-xs text-foreground-muted">
                  Billed annually or monthly
                </div>
              </div>

              <div className="pt-2 border-t border-border-subtle space-y-3.5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-foreground-muted">
                  Everything in Pro, plus:
                </div>
                <ul className="space-y-3 text-[14px]">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      Multi-seat team (up to 10 members)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      Dedicated accountant permissions
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      Custom domain links (pay.yourfirm.com)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-glass-active border border-border-medium flex items-center justify-center shrink-0 text-foreground-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground-secondary">
                      API webhooks &amp; Priority 24/7 SLA
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <a
                className="w-full py-3 rounded-xl bg-surface-glass-active hover:bg-surface-glass-strong border border-border-medium hover:border-border-hover text-foreground font-semibold text-sm transition-all text-center flex items-center justify-center"
                href="#"
              >
                Upgrade to Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
