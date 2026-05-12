import { GitBranch, X, Link, Mail, Play } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const icons = {
  github: GitBranch,
  twitter: X,
  linkedin: Link,
  email: Mail,
  youtube: Play,
};

const platformLabels = {
  github: "GitHub",
  twitter: "X",
  linkedin: "LinkedIn",
  email: "Email",
  youtube: "YouTube",
};

export default function FloatingSocials() {
  const { socials } = portfolioData;

  return (
    <nav
      aria-label="Social links"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 sm:px-4"
      style={{
        paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
        paddingTop: "0.5rem",
      }}
    >
      <div
        className="pointer-events-auto flex max-w-[min(100%,22rem)] items-center justify-center gap-0.5 rounded-full border border-paper/12 bg-ink/[0.88] px-2 py-1.5 shadow-[0_12px_48px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:gap-1 sm:px-3 sm:py-2"
        role="toolbar"
        aria-orientation="horizontal"
      >
        {Object.entries(socials).map(([platform, url]) => {
          const Icon = icons[platform];
          if (!Icon || !url) return null;
          const isHttp = /^https?:\/\//i.test(url);
          return (
            <a
              key={platform}
              href={url}
              target={isHttp ? "_blank" : undefined}
              rel={isHttp ? "noopener noreferrer" : undefined}
              aria-label={platformLabels[platform] ?? platform}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-paper/90 outline-none ring-paper/20 transition-colors duration-200 hover:bg-accent hover:text-ink focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Icon size={16} strokeWidth={1.75} aria-hidden />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
