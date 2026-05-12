import { GitBranch, X, Link, Mail, Globe } from "lucide-react";

const iconMap = {
  github: GitBranch,
  twitter: X,
  linkedin: Link,
  email: Mail,
  website: Globe,
};

const platformLabels = {
  github: "GitHub",
  twitter: "X",
  linkedin: "LinkedIn",
  email: "Email",
  website: "Website",
};

export default function SocialLinks({ socials, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 md:justify-start ${className}`}>
      {Object.entries(socials).map(([platform, url]) => {
        const Icon = iconMap[platform];
        if (!Icon || !url) return null;
        const isHttp = /^https?:\/\//i.test(url);
        return (
          <a
            key={platform}
            href={url}
            target={isHttp ? "_blank" : undefined}
            rel={isHttp ? "noopener noreferrer" : undefined}
            aria-label={platformLabels[platform] ?? platform}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper/80 text-ink outline-none ring-ink/20 transition-all duration-200 hover:border-ink hover:bg-accent hover:text-ink focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <Icon size={17} strokeWidth={1.75} aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
