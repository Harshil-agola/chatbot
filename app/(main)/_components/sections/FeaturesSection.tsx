import {
  ArrowUp,
  ArrowUpRight,
  Leaf,
  Plane,
  SlidersHorizontal,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden py-20 lg:py-24"
    >
      {/* Feathered ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-360 mx-auto px-4 lg:px-12 space-y-8">
        <div className="motion-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold text-foreground tracking-tight leading-tight">
              Explore more use cases.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-foreground-muted text-base leading-relaxed">
              Discover the outcomes you can drive by unifying invoicing,
              automated reminders, and payment telemetry into a single decision
              layer.
            </p>
          </div>
        </div>

        <div
          id="features-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Card 1: Forecasts & Budgets */}
          <div className="motion-reveal delay-100 group flex flex-col justify-between space-y-4">
            <div className="relative h-85 rounded-3xl bg-surface-glass border border-border-glass hover:border-brand-light/40 p-6 overflow-hidden flex flex-col justify-end transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at 75% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 60%)",
                }}
              />
              <div className="absolute top-10 right-8 z-10 bg-surface-container-high/90 backdrop-blur-md border border-border-medium rounded-xl px-4 py-2.5 shadow-xl shadow-black/20">
                <div className="text-[11px] font-medium text-foreground-muted">
                  Forecasted Spend
                </div>
                <div className="text-[18px] font-bold text-foreground tracking-tight">
                  $558.3K
                </div>
              </div>
              <div className="absolute top-34.5 right-25 z-10 w-4 h-4 rounded-full bg-accent-amber ring-4 ring-amber-400/20 shadow-md" />
              <div className="absolute bottom-16 left-10 z-10 bg-surface-container-high/90 backdrop-blur-md border border-border-medium rounded-xl px-4 py-2.5 shadow-xl shadow-black/20">
                <div className="text-[11px] font-medium text-foreground-muted">
                  Actuals
                </div>
                <div className="text-[18px] font-bold text-foreground tracking-tight">
                  $80.3K
                </div>
              </div>
              <div className="absolute bottom-27 left-39.5 z-10 w-3.5 h-3.5 rounded-full bg-brand ring-4 ring-brand/20 shadow-md" />
              <svg
                className="w-full h-55 overflow-visible pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 360 200"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="grad-solid-blue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M -10 150 Q 80 145 158 130 T 370 40"
                  fill="none"
                  stroke="#fbbf24"
                  strokeDasharray="5,5"
                  strokeWidth="2"
                />
                <path
                  d="M -10 160 L 60 160 Q 110 158 160 135 L 230 40 L 370 20 L 370 200 L -10 200 Z"
                  fill="url(#grad-solid-blue)"
                />
                <path
                  d="M -10 160 L 60 160 Q 110 158 160 135 L 230 40 L 370 20"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className="space-y-1.5 pt-1">
              <a
                className="inline-flex items-center gap-2 group-hover:text-brand-subtle text-foreground transition-colors"
                href="#"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-foreground group-hover:text-brand-subtle">
                  Forecasts &amp; Budgets
                </h3>
                <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-brand-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Continuous spend modeling with finance-grade insights, automated
                accruals, and predictive cash flow guidance.
              </p>
            </div>
          </div>

          {/* Card 2: Policy & Approvals */}
          <div className="motion-reveal delay-200 group flex flex-col justify-between space-y-4">
            <div className="relative h-85 rounded-3xl bg-surface-glass border border-border-glass hover:border-brand-light/40 p-6 overflow-hidden flex flex-col items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="w-[84%] max-w-67.5 bg-surface-container-highest/95 border border-border-glass rounded-xl p-3 shadow-lg opacity-90 scale-95 -translate-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border-glass text-[10px] text-foreground-muted">
                  <div className="flex gap-2">
                    <span className="text-foreground-secondary">
                      Booking Compliance
                    </span>
                    <span className="text-foreground-muted">
                      Policy Exceptions
                    </span>
                  </div>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-foreground-muted" />
                </div>
                <div className="pt-2 space-y-1">
                  <div className="flex justify-between text-[9px] text-foreground-muted">
                    <span>FY 2026</span>
                    <span>Approval Rate</span>
                  </div>
                  <div className="h-10 w-full flex items-end gap-1.5 pt-1">
                    <div className="w-full h-4 bg-brand/30 rounded-t" />
                    <div className="w-full h-6 bg-brand/50 rounded-t" />
                    <div className="w-full h-8 bg-brand/80 rounded-t" />
                    <div className="w-full h-5 bg-brand/40 rounded-t" />
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-[94%] bg-surface-container/95 backdrop-blur-xl border border-brand-light/40 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-3 -mt-6">
                <p className="text-[12px] sm:text-[13px] font-normal text-foreground leading-snug">
                  Review bookings against travel policy and escalate any
                  exceptions for approval
                  <span className="animate-pulse text-brand-light font-bold ml-0.5">
                    |
                  </span>
                </p>
                <div className="w-7 h-7 shrink-0 rounded-full bg-brand flex items-center justify-center text-foreground shadow-md shadow-brand/40">
                  <ArrowUp className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="space-y-1.5 pt-1">
              <a
                className="inline-flex items-center gap-2 group-hover:text-brand-subtle text-foreground transition-colors"
                href="#"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-foreground group-hover:text-brand-subtle">
                  Policy &amp; Approvals
                </h3>
                <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-brand-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Enforce policy earlier and route approvals with the context
                needed to act quickly across all team spend.
              </p>
            </div>
          </div>

          {/* Card 3: Sustainability */}
          <div className="motion-reveal delay-300 group flex flex-col justify-between space-y-4">
            <div className="relative h-85 rounded-3xl bg-surface-glass border border-border-glass hover:border-accent-emerald/40 p-6 overflow-hidden flex flex-col items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="text-[12px] text-foreground-muted mb-3">
                Recommendation for{" "}
                <span className="text-brand-subtle font-medium">
                  US Operations
                </span>
              </div>
              <div className="w-full max-w-70 bg-surface-container/95 backdrop-blur-xl border border-border-medium rounded-2xl p-4 shadow-2xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/20 border border-accent-emerald/30 flex items-center justify-center text-accent-emerald-subtle shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <div className="text-[13px] font-semibold text-foreground truncate">
                    Reduce Business Class by 15%
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-foreground-muted">
                    <span className="flex items-center gap-1 text-accent-emerald font-medium">
                      <Leaf className="w-3.5 h-3.5" />
                      12% lower emissions
                    </span>
                    <span>•</span>
                    <span>▼ 7.8M kg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1.5 pt-1">
              <a
                className="inline-flex items-center gap-2 group-hover:text-accent-emerald-subtle text-foreground transition-colors"
                href="#"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-foreground group-hover:text-accent-emerald-subtle">
                  Sustainability
                </h3>
                <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-accent-emerald-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Clear tradeoffs, credible data, and plans the business can
                execute to lower overhead and carbon impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
