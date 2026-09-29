import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/styles/dashboard.globals.css";

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
  title: "Dashboard - Invoicely",
  description:
    "Manage your invoices, clients, payments, and financial analytics.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function DashboardLayout({
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
      <body className="bg-background font-sans text-on-background antialiased selection:bg-brand selection:text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
