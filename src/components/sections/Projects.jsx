import { useState } from "react";

import jewelry_commerceImg from "../../../images/Screenshot-jewelry_commerce 2026-05-15.png";
import mamakofiRestaurantImg from "../../../images/Screenshot-mamakofi-restaurant 2026-05-15.png";
import portfolioImg from "../../../images/Screenshot 2026-05-15 121835.png";
import movieWebsiteImg from "../../../images/Screenshot-movie-website 2026-05-15.png";
import naomiDresssImg from "../../../images/Screenshot-Naomi_dress-2026-04-03.png";
import stableJerseysImg from "../../../images/Screenshot-stable-jeyseys 2026-04-09.png";

const projects = [
  {
    cat: "Web",
    title: "Jewelry ecommerce demo",
    desc: "A responsive Jewelry ecommerce demo with cart, ordering flow and fake payments logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    time: "2 months ago",
    views: "2,340",
    image: jewelry_commerceImg,
    source: "https://github.com/Codelearner01-mst/E-commerce-website",
    live: "https://e-commerce-website-git-main-codelearner01-msts-projects.vercel.app/index.html"
  },
  {
    cat: "Web",
    title: "Mamakofi kitchen",
    desc: "A full-stack project micmiking restaurant vibes with clean ui, ordering flow, payment integration using paystack.",
    tags: ["React", "Tailwind css", "python", "Flask", "Postgre", "Sqlalchemy"],
    time: "3 months ago",
    views: "1,890",
    image: mamakofiRestaurantImg,
    source: "https://github.com/Codelearner01-mst/Food_delivery_website",
    live: "https://food-delivery-website-topaz-beta.vercel.app/"
  },
  {
    cat: "Frontend",
    title: "Personal Portfolio Website",
    desc: "A responsive portfolio showcasing projects and contact links with a polished presentation layer.",
    tags: ["Responsive", "React", "UI", "Vite"],
    time: "1 month ago",
    views: "3,120",
    image: portfolioImg,
    source: "https://github.com/Codelearner01-mst/Personal-portfolio",
    live: "https://personal-portfolio-ecru-kappa-57.vercel.app/#"
  },
  {
    cat: "Frontend",
    title: "Cinematix movies",
    desc: "Fetches and displays all kind of movies including upcoming, latests,etc from TMB movies api.",
    tags: ["Fetch API", "React", "TMB"],
    time: "4 months ago",
    views: "1,450",
    image: movieWebsiteImg,
    source: "https://github.com/Codelearner01-mst/movie_webite",
    live: "https://movie-webite.vercel.app/"
  },
  {
    cat: "Web",
    title: "Naomi Dress",
    desc: "A responsive website that displays products with whatsapp contact integration for easy ordering of product",
    tags: ["React", "State", "UI"],
    time: "2 months ago",
    views: "1,980",
    image: naomiDresssImg,
    source: "https://github.com/Codelearner01-mst/dress_landing_page",
    live: "https://codelearner01-mst.github.io/dress_landing_page/"
  },
  {
    cat: "Web",
    title: "Stable Jerseys",
    desc: "A platform for browsing a wide selection of jerseys with integrated WhatsApp contact for quick and easy ordering.",
    tags: ["Javascript", "WhatsApp", "CSS"],
    time: "1 month ago",
    views: "1,200",
    image: stableJerseysImg,
    source: "https://github.com/Codelearner01-mst/Jersey-customize-websites",
    live: "https://jersey-customize-websites.vercel.app/"
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
                ${active === f
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
              className="bg-paper border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
                  <a href={p.source} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-[13px] font-bold text-muted hover:border-ink hover:text-ink transition-all duration-200 cursor-pointer">
                    GH
                  </a>
                  <a href={p.live} className="flex-1 font-heading text-[13px] font-bold tracking-widest uppercase py-2.5 bg-ink text-paper border-2 border-ink hover:bg-accent hover:text-ink hover:border-accent transition-all duration-200">
                    View Project ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
