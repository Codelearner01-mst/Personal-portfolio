import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="font-display text-xl tracking-[5px] text-ink">
            A-<span className="border-b-[3px] border-ink">TOKYO</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-heading text-[13px] font-bold tracking-[1.5px] uppercase text-muted hover:text-ink transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:block font-heading text-[13px] font-bold tracking-[2px] uppercase px-5 py-2 bg-ink text-paper hover:bg-ink/80 transition-colors duration-200"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 origin-center ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-ink transition-all duration-300 origin-center ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-ink/30 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsOpen(false)} />
        <nav className={`absolute top-14 left-0 right-0 bg-paper border-b border-border px-6 transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-heading text-[19px] font-bold text-ink border-b border-border py-[10px] hover:pl-2 hover:text-muted transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
