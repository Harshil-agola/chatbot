import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="motion-scale relative w-full max-w-360 mx-auto px-4 lg:px-12 py-12">
      <div
        className="relative bg-linear-to-r from-cta-start via-cta-mid to-cta-end text-foreground rounded-3xl p-8 lg:p-12 shadow-[0_20px_60px_rgba(45,47,158,0.45)] border border-brand-light/30 overflow-hidden text-center space-y-4"
        style={{
          background:
            "linear-gradient(135deg, rgb(3, 7, 18) 0%, rgb(10, 17, 40) 45%, rgb(30, 58, 138) 100%)",
        }}
      >
        {/* Ambient glow shapes */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-brand/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-accent-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-[28px] lg:text-[40px] font-bold tracking-tight text-foreground leading-tight">
            Start Invoicing Smarter Today
          </h2>
          <p className="text-base lg:text-lg text-foreground-secondary max-w-xl mx-auto">
            Join over 10,000 freelancers and growing businesses who get paid
            faster with Invoicely.
          </p>
          <div className="pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foreground text-dark-cta-text font-bold text-base rounded-full shadow-xl hover:bg-foreground-secondary transition-all duration-200"
              href="#"
            >
              <span>Start Your Free 14-Day Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-foreground-muted pt-1">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
