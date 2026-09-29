import Image from "next/image";

const COL1 = [
  {
    name: "Eva Green",
    role: "Operations Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    text: "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
  },
  {
    name: "Henry Ford",
    role: "Operations Analyst",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
  },
  {
    name: "Kathy Adams",
    role: "Innovation Lead",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    text: "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
  },
];

const COL2 = [
  {
    name: "Cathy Lee",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    text: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
  },
  {
    name: "Frank Moore",
    role: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    text: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
  },
  {
    name: "Ivy Wilson",
    role: "Business Consultant",
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
    text: "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
  },
  {
    name: "Leo Carter",
    role: "Technology Strategist",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    text: "From initial setup to scaling high-volume transactions, everything feels completely magical and seamless.",
  },
];

const COL3 = [
  {
    name: "Mia Turner",
    role: "Systems Integrator",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    text: "It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.",
  },
  {
    name: "Samuel Lee",
    role: "Futurist",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    text: "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
  },
  {
    name: "David Wright",
    role: "Research Scientist",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    text: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28">
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 100%), radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-360 mx-auto px-4 lg:px-12 space-y-12">
        {/* Section Heading */}
        <div className="motion-reveal text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold text-foreground tracking-tight leading-tight">
            Loved by people all over the universe
          </h2>
          <p className="max-w-2xl mx-auto text-[15px] sm:text-[16px] text-foreground-muted leading-relaxed">
            Every AI is used by millions of people around the globe. Our APIs
            have fan bases and people fight for us over twitter.
          </p>
        </div>

        {/* 3-Column Floating / Marquee Testimonial Stream Container */}
        <div className="relative max-h-160 overflow-hidden mask-marquee-y marquee-track py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* Column 1 */}
            <div className="marquee-column flex flex-col gap-6 overflow-hidden">
              <div className="animate-marquee-col-1 flex flex-col gap-6">
                {[...COL1, ...COL1].map((card, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="testimonial-card rounded-2xl p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3.5">
                      <Image
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-ring-glass shrink-0"
                        alt={card.name}
                        src={card.avatar}
                        width={40}
                        height={40}
                        unoptimized
                      />
                      <div>
                        <div className="font-semibold text-foreground text-[15px] leading-tight">
                          {card.name}
                        </div>
                        <div className="text-[12.5px] text-foreground-muted font-normal leading-tight mt-0.5">
                          {card.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-[13.5px] text-foreground-secondary leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="marquee-column flex flex-col gap-6 overflow-hidden">
              <div className="animate-marquee-col-2 flex flex-col gap-6">
                {[...COL2, ...COL2].map((card, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="testimonial-card rounded-2xl p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3.5">
                      <Image
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-ring-glass shrink-0"
                        alt={card.name}
                        src={card.avatar}
                        width={40}
                        height={40}
                        unoptimized
                      />
                      <div>
                        <div className="font-semibold text-foreground text-[15px] leading-tight">
                          {card.name}
                        </div>
                        <div className="text-[12.5px] text-foreground-muted font-normal leading-tight mt-0.5">
                          {card.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-[13.5px] text-foreground-secondary leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="hidden lg:flex marquee-column flex-col gap-6 overflow-hidden">
              <div className="animate-marquee-col-3 flex flex-col gap-6">
                {[...COL3, ...COL3].map((card, idx) => (
                  <div
                    key={`col3-${idx}`}
                    className="testimonial-card rounded-2xl p-6 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3.5">
                      <Image
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-ring-glass shrink-0"
                        alt={card.name}
                        src={card.avatar}
                        width={40}
                        height={40}
                        unoptimized
                      />
                      <div>
                        <div className="font-semibold text-foreground text-[15px] leading-tight">
                          {card.name}
                        </div>
                        <div className="text-[12.5px] text-foreground-muted font-normal leading-tight mt-0.5">
                          {card.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-[13.5px] text-foreground-secondary leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
