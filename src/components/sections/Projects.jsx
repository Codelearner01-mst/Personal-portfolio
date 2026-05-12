import { useState } from "react";

import calculatorImg from "../../../images/calculator-screenshot.png";
import gameImg from "../../../images/game-screenshot.png";
import portfolioImg from "../../../images/portfolio-screenshot.png";
import quoteImg from "../../../images/quote-screenshot.png";
import tdlImg from "../../../images/Tdl-screenshot.png";

const projects = [
  {
    cat: "Web",
    title: "Basic Calculator",
    desc: "A clean browser calculator for everyday arithmetic with a focused layout and clear controls.",
    tags: ["HTML", "CSS", "JavaScript"],
    time: "2 months ago",
    views: "2,340",
    image: calculatorImg,
  },
  {
    cat: "Web",
    title: "Number Guessing Game",
    desc: "An interactive guessing game with feedback prompts, built to practice DOM logic and user flow.",
    tags: ["JavaScript", "DOM", "Games"],
    time: "3 months ago",
    views: "1,890",
    image: gameImg,
  },
  {
    cat: "Frontend",
    title: "Personal Portfolio Website",
    desc: "A responsive portfolio showcasing projects and contact links with a polished presentation layer.",
    tags: ["Responsive", "UI", "Vite"],
    time: "1 month ago",
    views: "3,120",
    image: portfolioImg,
  },
  {
    cat: "Frontend",
    title: "Random Quote Generator",
    desc: "Fetches and displays motivational quotes with a simple refresh interaction and readable typography.",
    tags: ["Fetch API", "JavaScript"],
    time: "4 months ago",
    views: "1,450",
    image: quoteImg,
  },
  {
    cat: "Web",
    title: "To-Do List",
    desc: "A task list app for adding, marking, and organizing items with persistent-feeling UX patterns.",
    tags: ["React", "State", "UI"],
    time: "2 months ago",
    views: "1,980",
    image: tdlImg,
  },
];

const filters = ["All", "Web", "Frontend"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="py-20 px-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="relative inline-block pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[82px] leading-none text-ink/[0.04] tracking-widest select-none whitespace-nowrap">
              03
            </span>
            <h2 className="font-heading text-4xl font-extrabold relative">
              My Projects
            </h2>
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
                ${
                  active === f
                    ? "bg-ink text-paper border-ink"
                    : "bg-transparent text-muted border-border hover:border-ink hover:text-ink"
                }`}
            >
              {f === "Web" && "🌐 "}
              {f === "Frontend" && "<> "}
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p) => (
            <div
              key={p.title}
              className="bg-paper border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-250"
            >
              {/* Thumbnail */}
              <div className="relative h-44 bg-ink/[0.06] border-b border-border overflow-hidden shrink-0">
                <img
                  src={p.image}
                  alt={`Screenshot — ${p.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-[18px] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted mb-3">
                  {p.desc}
                </p>

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
