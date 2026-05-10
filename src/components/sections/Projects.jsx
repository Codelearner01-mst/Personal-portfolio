import { useState } from "react";

const projects = [
  {
    cat: "Web",
    title: "Zero Hunger Platform",
    desc: "A web platform connecting food donors with those in need, reducing food waste and combating hunger at a grassroots level.",
    tags: ["Web Dev", "Node.js", "PostgreSQL", "React"],
    time: "2 months ago",
    views: "2,340",
    bg: "#000000",
  },
  {
    cat: "Frontend",
    title: "Tokyo Design System",
    desc: "A comprehensive React component library with 50+ accessible components, built with Tailwind CSS and TypeScript.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    time: "5 months ago",
    views: "1,890",
    bg: "#000000",
  },
  {
    cat: "Backend",
    title: "AI Microservices API",
    desc: "Scalable REST API powering AI features across multiple products — includes rate limiting, auth, and streaming responses.",
    tags: ["Python", "FastAPI", "OpenAI", "Docker"],
    time: "1 month ago",
    views: "3,120",
    bg: "#000000",
  },
];

const filters = ["All", "Web", "Frontend", "Backend"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="py-20 px-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="relative inline-block pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[82px] leading-none text-ink/[0.04] tracking-widest select-none whitespace-nowrap">
              03
            </span>
            <h2 className="font-heading text-4xl font-extrabold relative">My Projects</h2>
          </div>
          <p className="text-muted text-[17px] mt-3">
            Explore my portfolio of innovative solutions across various domains
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-heading text-[13px] font-bold tracking-wider uppercase px-4 py-2 rounded border-[1.5px] transition-all duration-200
                ${active === f
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-muted border-border hover:border-ink hover:text-ink"
                }`}
            >
              {f === "Web" && "🌐 "}
              {f === "Frontend" && "<> "}
              {f === "Backend" && "⬡ "}
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shown.map((p) => (
            <div
              key={p.title}
              className="bg-paper border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-250"
            >
              {/* Thumbnail */}
              <div
                className="h-36 flex items-center justify-center p-5"
                style={{ background: p.bg }}
              >
                <span className="font-display text-2xl tracking-widest text-paper/90 text-center leading-tight">
                  {p.title}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-[18px] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted mb-3">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] px-2.5 py-1 border border-ink/15 rounded-full bg-ink/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex justify-between text-[14px] text-muted mb-4">
                  <span>🕐 {p.time}</span>
                  <span>👁 {p.views}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 items-center">
                  <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-[13px] font-bold text-muted hover:border-ink hover:text-ink transition-all duration-200 cursor-pointer">
                    GH
                  </div>
                  <button className="flex-1 font-heading text-[13px] font-bold tracking-widest uppercase py-2.5 bg-ink text-paper border-2 border-ink hover:bg-accent hover:text-ink hover:border-accent transition-all duration-200">
                    View Project ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
