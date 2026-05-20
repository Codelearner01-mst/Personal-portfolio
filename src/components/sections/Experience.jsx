const experiences = [
  {
    role: "Backend & Full-Stack Development",
    company: "Personal Mastery",
    type: "Self-Led",
    period: "April 2026 — Present",
    duration: "Ongoing",
    desc: "Transitioned into deep backend development, focusing on database architecture with PostgreSQL and server-side logic using Python and Flask. Building integrated, live solutions like the Mamakofi Kitchen project.",
    sources: ["FreeCodeCamp", "YouTube", "Official Docs"],
    tags: ["Python", "Flask", "SqlAlchemy", "PostgreSQL", "Backend Architecture", "RestAPI", "Basic Linux"],
    accent: "#000000",
  },
  {
    role: "Frontend Developer (React)",
    company: "The Javascript Journey",
    type: "Learning",
    period: "July 2025 — April 2026",
    duration: "10 mos",
    desc: "Mastered the React ecosystem and modern styling with Tailwind CSS. Focused on building responsive, high-performance UIs, state management, and component testing to ensure clean, bug-free code.",
    sources: ["FreeCodeCamp"],
    tags: ["JavaScript", "React", "Tailwind CSS", "Testing", "Performance"],
    accent: "#000000",
  },
  {
    role: "The Foundation",
    company: "First Lines of Code",
    type: "Beginner",
    period: "Nov 2024 — June 2025",
    duration: "8 mos",
    desc: "Started the programming journey by mastering the core fundamentals. Learned Python for logic, basics SQL, and HTML/CSS to build the structural and visual foundations of the web.",
    sources: ["Mimo", "SoloLearn"],
    tags: ["Python", "HTML", "CSS", "Web Fundamentals", "SQL"],
    accent: "#000000",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="relative inline-block pt-7">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[82px] leading-none text-ink/[0.04] tracking-widest select-none whitespace-nowrap pointer-events-none">
              05
            </span>
            <h2 className="font-heading text-4xl font-extrabold relative">My Journey</h2>
          </div>
          <p className="text-muted text-[17px] mt-3">The journey that shaped my craft</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative flex gap-8 group">

                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-border bg-paper flex items-center justify-center text-[12px] font-bold font-heading tracking-wider z-10 group-hover:border-ink transition-colors duration-300"
                    style={{ color: exp.accent }}
                  >
                    0{i + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-paper border border-border rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-250">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h3 className="font-heading font-bold text-[20px] leading-tight">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-[16px]">{exp.company}</span>
                        <span className="text-border">·</span>
                        <span
                          className="text-[12px] font-heading font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{ background: `${exp.accent}18`, color: exp.accent === "#0a0a0a" ? "#0a0a0a" : exp.accent }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[14px] font-medium text-ink">{exp.period}</p>
                      <p className="text-[13px] text-muted">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-[15.5px] leading-relaxed text-muted mb-4">{exp.desc}</p>

                  {/* Sources */}
                  <div className="mb-6">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-muted/60 block mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-ink/40"></span> Learning Sources
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.sources.map((s) => (
                        <span key={s} className="text-[13px] font-medium text-ink bg-ink/5 px-2.5 py-1 rounded border border-border">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills / Tags */}
                  <div className="pt-5 border-t border-border">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-muted/60 block mb-3 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent"></span> Technologies & Skills
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-ink/10 bg-paper shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
