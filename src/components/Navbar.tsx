import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isDark = variant === "dark" && !scrolled;
  const textClass = isDark ? "text-clay" : "text-navy";
  const bgClass = scrolled
    ? "bg-clay/85 backdrop-blur-xl border-b border-navy/10"
    : isDark
      ? "bg-transparent"
      : "bg-clay/40 backdrop-blur-md";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Beyond Impact home">
          <span aria-hidden className="relative flex h-9 w-9 items-center justify-center">
            <span className={`absolute inset-0 rounded-full border-2 ${isDark ? "border-green/70" : "border-green"}`} />
            <span className={`absolute inset-1 rounded-full border ${isDark ? "border-clay/80" : "border-navy"}`} />
            <span className="script text-coral text-lg leading-none">♥</span>
          </span>
          <span className={`flex items-baseline gap-1.5 ${textClass}`}>
            <span className="script text-2xl leading-none">Beyond</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-green">Impact</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors ${textClass} ${
                  isActive ? "" : "opacity-70 hover:opacity-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-coral" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href={`mailto:${site.contactEmail}`}
            className={`ml-4 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              isDark
                ? "border-clay/40 text-clay hover:bg-clay hover:text-navy"
                : "border-navy/20 text-navy hover:bg-navy hover:text-clay"
            }`}
          >
            Get in touch
          </a>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${textClass}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy/10 bg-clay">
          <div className="container-x flex flex-col gap-1 py-4">
            {site.navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className="rounded px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium text-clay"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
