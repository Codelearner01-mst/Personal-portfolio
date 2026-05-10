const stack = [
  {
    category: "Frontend", tools: [
      { name: "React", emoji: "⚛️" },
      { name: "Tailwind", emoji: "🎨" },
    ]
  },
  {
    category: "Backend", tools: [
      { name: "Python", emoji: "🐍" },
      { name: "FastAPI", emoji: "⚡" },
      { name: "REST APIs", emoji: "🔗" },
    ]
  },
  {
    category: "Database", tools: [
      { name: "PostgreSQL", emoji: "🐘" },
    ]
  },
  {
    category: "DevOps & Cloud", tools: [
      { name: "Vercel", emoji: "▲" },
    ]
  },
  {
    category: "AI & Tools", tools: [
      { name: "Git", emoji: "🌿" },
      { name: "VS Code", emoji: "💻" },
    ]
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-10 border-t border-border bg-ink">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="relative inline-block pt-7">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[82px] leading-none text-paper/[0.04] tracking-widest select-none whitespace-nowrap pointer-events-none">
              06
            </span>
            <h2 className="font-heading text-4xl font-extrabold text-paper relative">
              Tech Stack
            </h2>
          </div>
          <p className="text-paper/40 text-[17px] mt-3">Tools and technologies I work with daily</p>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-10">
          {stack.map((group) => (
            <div key={group.category}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-5">
                <span className="font-heading text-[12px] font-bold tracking-[3px] uppercase text-paper/30">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-paper/10" />
              </div>
              {/* Tool pills */}
              <div className="flex flex-wrap gap-3">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-paper/10 bg-paper/5 hover:bg-accent hover:border-accent hover:text-ink transition-all duration-200 cursor-default group"
                  >
                    <span className="text-[18px] leading-none">{tool.emoji}</span>
                    <span className="font-heading text-[14px] font-bold tracking-wide text-paper/70 group-hover:text-ink transition-colors duration-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 pt-8 border-t border-paper/10 text-center">
          <p className="text-paper/25 text-[14px] tracking-wider">
            Always learning · Always building · Always shipping
          </p>
        </div>
      </div>
    </section>
  );
}
