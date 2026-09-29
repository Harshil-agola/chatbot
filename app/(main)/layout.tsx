import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SmoothScroll } from "@/components/sections";
import "@/app/styles/main-globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invoicely - Simple Invoicing for Freelancers & Businesses",
  description:
    "Create, send, and track professional invoices in seconds. Custom templates, automatic tax calculations, multi-currency support, and payment reminders.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className="bg-background font-sans text-on-background antialiased selection:bg-brand selection:text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
