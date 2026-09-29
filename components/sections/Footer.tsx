import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-footer border-t border-border-subtle mt-12 relative z-10 text-foreground">
      <div className="relative w-full overflow-hidden pt-12 pb-0">
        <div className="w-full max-w-360 mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo.svg"
                  alt="Invoicely Brand logo"
                  width={120}
                  height={32}
                  style={{ width: "auto" }}
                  className="h-8 object-contain brightness-125 drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                />
              </div>
              <p className="text-[15px] text-foreground-secondary max-w-sm leading-relaxed">
                The modern financial operating system for creators, agencies,
                and global businesses. One unified platform from invoice to
                payout.
              </p>
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-glass hover:bg-surface-glass-hover border border-border-glass font-medium text-[13px] transition-all shadow-md shadow-black/30 text-foreground"
                  href="#"
                >
                  <svg
                    className="w-4 h-4 fill-current text-foreground"
                    viewBox="0 0 170 170"
                    aria-hidden="true"
                  >
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.94-14.3-6.74-10.23-12.04-21.73-15.89-34.5-3.85-12.78-5.78-24.8-5.78-36.08 0-14.36 3.65-26.24 10.95-35.65 7.3-9.41 16.34-14.23 27.12-14.47 5.17 0 10.85 1.45 17.06 4.35 6.2 2.9 10.02 4.41 11.45 4.53 1.63-.12 5.75-1.74 12.37-4.87 6.62-3.13 12.28-4.47 16.98-4.02 12.63 1.03 22.56 5.86 29.8 14.49-10.98 6.64-16.34 15.75-16.08 27.32.26 9.17 3.79 16.92 10.59 23.25 6.79 6.33 14.88 10.08 24.26 11.25-2.22 6.54-4.8 12.87-7.74 18.99zM119.22 33.15c0-7.23 2.65-13.9 7.95-20.02 5.3-6.12 11.83-10.15 19.59-12.09.22 1.34.33 2.57.33 3.69 0 7.12-2.73 13.94-8.19 20.46-5.46 6.52-12.06 10.38-19.8 11.58.07-1.23.12-2.44.12-3.62z" />
                  </svg>
                  <span>Download iOS App</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-[15px] tracking-wide">
                  Apps
                </h3>
                <ul className="space-y-2.5 text-[14px]">
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Invoicing &amp; Billing
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Auto Tax Calculation
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Payment Tracking
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Client Portal
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Expense Tracker
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-[15px] tracking-wide">
                  Templates
                </h3>
                <ul className="space-y-2.5 text-[14px]">
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Modern Indigo
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Minimal Clean
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Forest Emerald
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Warm Bronze
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Custom Templates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-[15px] tracking-wide">
                  Product
                </h3>
                <ul className="space-y-2.5 text-[14px]">
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      API &amp; Webhooks
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Security &amp; Compliance
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-[15px] tracking-wide">
                  Social
                </h3>
                <ul className="space-y-2.5 text-[14px]">
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-foreground-secondary hover:text-foreground transition-colors duration-150 inline-block"
                      href="#"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground-secondary text-[14px]">
            <div>
              © 2026 Invoicely, Inc. All rights reserved.
              <a
                className="underline text-foreground-secondary hover:text-foreground ml-1 transition-colors"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="underline text-foreground-secondary hover:text-foreground ml-1 transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </div>
            <div className="flex items-center gap-4 text-[13px] text-foreground-secondary">
              <span className="flex items-center gap-1.5 font-medium text-foreground-secondary">
                <span className="w-2 h-2 rounded-full bg-accent-emerald shadow-[0_0_8px_rgba(52,211,153,1)]" />
                Systems Operational
              </span>
              <span className="opacity-40">•</span>
              <span>SOC2 Certified</span>
              <span className="opacity-40">•</span>
              <span>PCI-DSS Level 1</span>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden select-none pointer-events-none mt-4">
          <div className="w-full text-center font-black tracking-tighter text-[110px] sm:text-[160px] md:text-[220px] lg:text-[260px] leading-[0.8] text-transparent bg-clip-text bg-linear-to-b from-brand-light/40 via-brand/20 to-brand-hover/5 -mb-6 lg:-mb-10 opacity-90 drop-shadow-[0_0_40px_rgba(99,102,241,0.2)]">
            Invoicely
          </div>
        </div>
      </div>
    </footer>
  );
}
