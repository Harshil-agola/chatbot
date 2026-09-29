"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You get full, unrestricted access to all Pro tier features for 14 days without entering any credit card. You can create unlimited invoices, invite test clients, set up recurring automations, and generate payment links immediately.",
  },
  {
    question:
      "Which payment methods and rails are supported for client payouts?",
    answer:
      "We integrate directly with Stripe, PayPal, Apple Pay, Google Pay, ACH Direct Debit, and SEPA transfers. Funds from client payments route directly into your connected bank account with automated settlement notifications.",
  },
  {
    question: "Can I use my own custom domain and custom branding?",
    answer: (
      <>
        Yes! Business plan subscribers can connect a custom CNAME (such as{" "}
        <code className="text-brand-subtle font-mono text-xs bg-brand/15 px-1.5 py-0.5 rounded border border-brand/20">
          billing.yourcompany.com
        </code>
        ), upload custom brand logos, customize color hex palettes, and remove
        all default platform badges from invoice emails and hosted payment
        portals.
      </>
    ),
  },
  {
    question: "How do automated payment reminders and late fees work?",
    answer:
      "You can configure smart multi-stage reminder schedules (e.g. 3 days before due date, on due date, and 5 days overdue). The system will automatically email branded reminder notices with direct one-click payment links, and optionally calculate compound or flat late payment penalties.",
  },
  {
    question:
      "Can I invite team members and my accountant with custom permissions?",
    answer:
      "Yes. Invoicely supports role-based access control (RBAC). You can assign roles like Admin, Billing Member, or Read-Only Accountant so your financial advisors can export ledger reports and reconciliations without modifying active invoices.",
  },
  {
    question: "How secure is my client and payment information?",
    answer:
      "All data in transit is encrypted using 256-bit TLS 1.3 encryption and stored in SOC-2 compliant, PCI-DSS Level 1 certified data centers. We never store raw credit card numbers on our servers.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-linear-to-b from-background via-faq-mid to-background py-20 lg:py-28"
    >
      {/* Radial glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99, 102, 241, 0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-250 mx-auto px-4 lg:px-12 space-y-12">
        {/* Section Heading */}
        <div className="motion-reveal text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-foreground tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-[15px] sm:text-[16px] text-foreground-secondary leading-relaxed">
            Everything you need to know about the product, billing,
            integrations, and automated payment workflows.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item motion-reveal rounded-2xl bg-surface-glass hover:bg-surface-glass-hover border border-border-glass hover:border-brand-light/50 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <span className="font-semibold text-[16px] sm:text-[17px] text-foreground group-hover:text-brand-subtle transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground-muted group-hover:text-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-[14.5px] text-foreground-secondary leading-relaxed border-t border-border-subtle mt-1 transition-all duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Callout */}
        <div className="motion-reveal text-center pt-4">
          <p className="text-sm text-foreground-muted">
            Still have questions?
            <a
              href="#"
              className="text-brand-subtle hover:text-foreground underline font-medium ml-1 transition-colors"
            >
              Contact our 24/7 finance support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
