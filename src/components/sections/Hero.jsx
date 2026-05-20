import { Briefcase, MapPin } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  const { name, role, company, location, bio, tags, avatar, socials, resume } =
    portfolioData;
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 pt-14 px-6 md:px-16 py-16 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.22,
        }}
      />

      {/* ── LEFT: Avatar ── */}
      <div className="relative flex flex-col items-center shrink-0 animate-fade-in">
        {/* Dashed rotating ring */}
        <div className="relative">
          <div
            className="absolute inset-[-6px] rounded-full border-2 border-dashed border-ink opacity-100"
            style={{ animation: "spin 18s linear infinite" }}
          />
          <div className="relative z-10 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-ink shadow-[0_6px_32px_rgba(0,0,0,0.09)] bg-paper flex items-center justify-center font-display text-5xl md:text-6xl text-ink">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              `${firstName[0]}${lastName[0]}`
            )}
          </div>
          <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-paper z-20" />
        </div>

        {/* Decorative number — desktop only */}
        <span className="hidden md:block font-display text-[102px] leading-none text-ink/[0.04] tracking-widest mt-2 select-none">
          01
        </span>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md z-10">
        {/* Available chip */}
        <div
          className="inline-flex items-center gap-1.5 bg-ink text-accent text-[12px] font-medium tracking-[2px] uppercase px-3 py-1 rounded-full mb-4 animate-fade-up"
          style={{
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          Available for work
        </div>

        {/* Name */}
        <h1
          className="font-display text-[56px] md:text-[77px] tracking-[3px] leading-[0.95] mb-4 animate-fade-up"
          style={{
            animationDelay: "0.15s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {firstName}{" "}
          <span className="relative inline-block">
            {lastName}
            <span className="absolute bottom-[3px] left-0 right-0 h-[3px] -z-10" />
          </span>
        </h1>

        {/* Role 
        <div
          className="flex items-center justify-center md:justify-start gap-1.5 text-muted text-[15px] mb-5 animate-fade-up"
          style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}
        >
          <Briefcase size={13} />
          {role}
          <span className="text-border mx-0.5">@</span>
          <span className="text-ink font-medium">{company}</span>
        </div>*/}

        {/* Bio */}
        <p
          className="text-[1rem] leading-[1.8] text-muted mb-4 animate-fade-up"
          style={{
            animationDelay: "0.3s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {bio}
        </p>

        {/* Location */}
        <div
          className="flex items-center justify-center md:justify-start gap-1.5 text-[14px] text-muted/70 mb-6 animate-fade-up"
          style={{
            animationDelay: "0.35s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <MapPin size={12} />
          {location}
        </div>

        {/* Tags */}
        <div
          className="flex flex-wrap justify-center md:justify-start gap-2 mb-7 animate-fade-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex gap-2.5 w-full mb-7 animate-fade-up"
          style={{
            animationDelay: "0.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Button href="#contact" className="flex-1">
            Contact Me
          </Button>
          <Button
            onClick={() => alert("Resume coming soon")}
            variant="outline"
            className="flex-1"
          >
            View Resume
          </Button>
        </div>

        {/* Divider */}
        <div
          className="flex items-center gap-3 w-full mb-5 animate-fade-up"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-[12px] tracking-[2px] uppercase text-muted/60">
            Find me on
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Socials */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: "0.65s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <SocialLinks socials={socials} />
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `}</style>
    </section>
  );
}
