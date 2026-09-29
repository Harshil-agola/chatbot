import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";

const TEMPLATES = [
  {
    title: "Modern Indigo",
    category: "SaaS & Tech",
    description:
      "Engineered for tech providers with live checkout and QR payment integration.",
    tag: "Dark UI",
    footerTag: "Popular Choice",
    image: "/assets/template_modern_tech.jpg",
    bgClass: "bg-tpl-indigo",
  },
  {
    title: "Minimal Clean",
    category: "Freelance",
    description:
      "Swiss-inspired typographic layout built for independent creators and studios.",
    tag: "Swiss Light",
    footerTag: "High Contrast",
    image: "/assets/template_minimal_clean.jpg",
    bgClass: "bg-tpl-clean",
  },
  {
    title: "Agency Operations",
    category: "Agency & Ops",
    description:
      "Structured milestone invoicing with deliverables tracking and stamps.",
    tag: "Agency",
    footerTag: "Milestone Ready",
    image: "/assets/template_forest_emerald.jpg",
    bgClass: "bg-tpl-forest",
  },
  {
    title: "Executive Retainer",
    category: "Legal & Finance",
    description:
      "Premium corporate styling with multi-currency conversion and legal retainers.",
    tag: "Retainer",
    footerTag: "Multi-Currency",
    image: "/assets/template_warm_bronze.jpg",
    bgClass: "bg-tpl-bronze",
  },
];

export default function TemplatesSection() {
  return (
    <section
      id="templates"
      className="relative w-full overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 100%), radial-gradient(circle at 85% 70%, rgba(56, 189, 248, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-360 mx-auto px-4 lg:px-12">
        {/* Section Heading */}
        <div className="motion-reveal text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-foreground tracking-tight leading-tight">
            Designer templates crafted for every industry
          </h2>
          <p className="text-[15px] sm:text-[16px] text-foreground-secondary leading-relaxed">
            Explore ultra-crisp, high-converting invoice templates built for
            speed, compliance, and instant payouts.
          </p>
        </div>
      </div>

      {/* Full-Width Infinite Slider with Dual Side Gradient Fades */}
      <div className="relative w-full overflow-hidden mask-marquee-x py-4 select-none">
        {/* Left and Right Deep Gradient Masks for Maximum Edge Fading */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-36 sm:w-64 md:w-80 lg:w-96 bg-linear-to-r from-background via-background/95 via-35% to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-36 sm:w-64 md:w-80 lg:w-96 bg-linear-to-l from-background via-background/95 via-35% to-transparent z-20" />

        {/* Infinite Marquee Track (Double set for seamless loop) */}
        <div className="animate-marquee-templates flex items-stretch gap-6 pl-6 cursor-grab active:cursor-grabbing">
          {/* First set */}
          {TEMPLATES.map((item, idx) => (
            <div
              key={`template-1-${idx}`}
              className="template-card w-67.5 sm:w-77.5 shrink-0 group flex flex-col justify-between rounded-3xl bg-surface-glass hover:bg-surface-glass-hover border border-border-glass hover:border-brand-light/50 p-4 sm:p-5 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div
                  className={`relative w-full aspect-3/4 rounded-2xl overflow-hidden border border-border-glass group-hover:border-brand-light/40 transition-all shadow-inner ${item.bgClass}`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} Invoice Template`}
                    fill
                    sizes="(max-width: 768px) 270px, 310px"
                    className="object-cover object-top transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-brand text-foreground text-xs font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-glass-pill backdrop-blur-md text-foreground text-[11px] font-mono">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-foreground group-hover:text-brand-subtle transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-brand-subtle bg-brand/15 border border-brand/30 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-foreground-muted leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border-subtle mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground-muted">
                  {item.footerTag}
                </span>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-subtle hover:text-foreground transition-colors"
                >
                  <span>Use Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Duplicate set */}
          {TEMPLATES.map((item, idx) => (
            <div
              key={`template-2-${idx}`}
              className="template-card w-67.5 sm:w-77.5 shrink-0 group flex flex-col justify-between rounded-3xl bg-surface-glass hover:bg-surface-glass-hover border border-border-glass hover:border-brand-light/50 p-4 sm:p-5 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div
                  className={`relative w-full aspect-3/4 rounded-2xl overflow-hidden border border-border-glass group-hover:border-brand-light/40 transition-all shadow-inner ${item.bgClass}`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} Invoice Template`}
                    fill
                    sizes="(max-width: 768px) 270px, 310px"
                    className="object-cover object-top transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-brand text-foreground text-xs font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-glass-pill backdrop-blur-md text-foreground text-[11px] font-mono">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-foreground group-hover:text-brand-subtle transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-brand-subtle bg-brand/15 border border-brand/30 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-foreground-muted leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border-subtle mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground-muted">
                  {item.footerTag}
                </span>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-subtle hover:text-foreground transition-colors"
                >
                  <span>Use Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
