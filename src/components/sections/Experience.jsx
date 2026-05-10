const experiences = [
  {
    role: "Chief Technology Officer",
    company: "Plural.com",
    type: "Full-time",
    period: "2022 — Present",
    duration: "2 yrs 4 mos",
    desc: "Leading all technical strategy, architecture, and engineering teams. Scaled infrastructure to support 10x user growth, introduced AI-driven product features, and built a cross-functional team of 30+ engineers.",
    tags: ["Leadership", "System Design", "AI", "React", "AWS"],
    accent: "#000000",
  },
  {
    role: "Senior Software Engineer",
    company: "Stripe",
    type: "Full-time",
    period: "2020 — 2022",
    duration: "2 yrs",
    desc: "Built and maintained core payment infrastructure handling billions in transactions. Led a team of 6 engineers delivering new developer APIs and SDKs used by 100k+ developers globally.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Distributed Systems"],
    accent: "#000000",
  },
  {
    role: "Software Engineer",
    company: "Meta",
    type: "Full-time",
    period: "2018 — 2020",
    duration: "2 yrs",
    desc: "Developed high-performance React components for Facebook's news feed reaching 2B+ users. Contributed to the open-source GraphQL specification and internal tooling.",
    tags: ["React", "GraphQL", "Python", "Performance"],
    accent: "#000000",
  },
  {
    role: "Frontend Developer",
    company: "Vercel",
    type: "Contract",
    period: "2017 — 2018",
    duration: "1 yr",
    desc: "Designed and built the initial version of the Vercel dashboard UI. Worked closely with the founding team to define the product's design language and component library.",
    tags: ["Next.js", "React", "CSS", "Design Systems"],
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
            <h2 className="font-heading text-4xl font-extrabold relative">Work Experience</h2>
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

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] px-3 py-1 rounded-full border border-ink/10 bg-ink/[0.03]"
                      >
                        {t}
                      </span>
                    ))}
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
