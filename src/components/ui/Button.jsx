export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-[13px] font-heading font-bold text-[14px] tracking-[2px] uppercase border-2 transition-all duration-200 focus:outline-none";
  const variants = {
    primary:
      "bg-ink text-paper border-ink hover:bg-accent hover:text-ink hover:border-accent",
    outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
