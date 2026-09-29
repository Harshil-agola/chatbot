import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  Footer,
  Header,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  TemplatesSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-background min-h-screen relative">
        <div className="flex flex-col w-full relative z-10">
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TemplatesSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
