import { GitBranch, X, Link, Mail, Globe } from "lucide-react";

const iconMap = {
  github: GitBranch,
  twitter: X,
  linkedin: Link,
  email: Mail,
  website: Globe,
};

export default function SocialLinks({ socials, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(socials).map(([platform, url]) => {
        const Icon = iconMap[platform];
        if (!Icon || !url) return null;
        return (
          <a
            key={platform}
            href={url}
            target={platform !== "email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={platform}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-ink hover:border-ink hover:bg-accent transition-all duration-200"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
