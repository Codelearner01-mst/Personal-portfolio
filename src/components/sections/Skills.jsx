const skills = [
  {
    title: "Frontend Development",
    color: "#000000",
    icon: "</>",
    items: [
      "HTML",
      "React",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    color: "#000000",
    icon: "⬡",
    items: ["Python", "PostgreSQL", "Flask"],
  },
  {
    title: "AI & DevOps",
    color: "#000000",
    icon: "⚡",
    items: ["Basic Linux", "Git", "Github", "Deployment"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-10 border-t border-border overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.15,
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="relative inline-block pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[82px] leading-none text-ink/[0.04] tracking-widest select-none whitespace-nowrap">
              02
            </span>
            <h2 className="font-heading text-4xl font-extrabold relative">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-muted text-[17px] mt-3">
            Crafting solutions with precision and passion
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {skills.map((s) => (
            <div
              key={s.title}
              className="bg-paper border shadow-lg border-border rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
            >
              {/* Icon */}
              <div
                className="w-13 h-13 rounded-xl flex items-center justify-center text-paper font-black text-lg mb-4 font-mono"
                style={{ background: s.color, width: 52, height: 52 }}
              >
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-[20px] mb-4">
                {s.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-[14px] px-3 py-1 border border-ink/15 rounded-full bg-ink/[0.04] hover:bg-ink hover:text-paper transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
