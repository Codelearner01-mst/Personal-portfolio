import { portfolioData } from "../../data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section
      id="about-me"
      className="relative py-20 px-10 border-t border-ink overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-extrabold relative text-ink">
            About Me
          </h2>
        </div>
        <div className="bg-paper border border-ink p-8 shadow-[8px_8px_0_#000000]">
          <div className="space-y-4 text-ink text-lg leading-relaxed font-body">
            {about
              .split(/\n\s*\n/)
              .map((block) => block.trim())
              .filter(Boolean)
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
