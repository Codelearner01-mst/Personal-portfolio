import { GitBranch, X, Link, Mail, Play } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const icons = {
  github: GitBranch,
  twitter: X,
  linkedin: Link,
  email: Mail,
  youtube: Play,
};

export default function FloatingSocials() {
  const { socials, email } = portfolioData;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-5 flex items-center gap-1.5 bg-ink/92 backdrop-blur-md rounded-full px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      {Object.entries(socials).map(([platform, url]) => {
        const Icon = icons[platform];
        if (!Icon || !url) return null;
        return (
          <a
            key={platform}
            href={url}
            target={platform !== "email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            title={platform}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-accent text-black hover:text-accent hover:bg-paper/10 transition-all duration-200"
          >
            <Icon size={15} />
          </a>
        );
      })}
      <div className="w-px h-5 bg-paper/15 mx-1" />
      <span className="text-[13px] text-black tracking-wide pr-1">
        {email ?? "ahmed@tokyo.dev"}
      </span>
    </div>
  );
}
