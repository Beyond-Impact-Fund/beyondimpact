import { Link } from "react-router-dom";
import { site } from "@/content/site";

import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy text-clay">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Beyond Impact home">
              <span aria-hidden className="relative flex h-12 w-12 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-green" />
                <span className="absolute inset-1.5 rounded-full border border-clay" />
                <span className="script text-coral text-2xl leading-none">♥</span>
              </span>
              <span className="flex flex-col">
                <span className="script text-4xl leading-none text-clay">Beyond</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-green mt-1">Impact</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-clay/70 leading-relaxed">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-8 inline-flex items-baseline gap-2 font-display text-2xl tracking-tight text-clay hover:text-coral transition-colors"
            >
              {site.contactEmail}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="eyebrow text-clay/60">Sitemap</div>
            <ul className="mt-6 space-y-3">
              {site.navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-clay/85 hover:text-coral transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-clay/60">Legal</div>
            <ul className="mt-6 space-y-3 text-sm text-clay/70">
              <li>Beyond Impact Advisors Sàrl</li>
              <li>Luxembourg SICAV-RAIF</li>
              <li>AIFM: MC Square SA</li>
              <li>Article 9 (SFDR)</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-clay/15 pt-8 text-xs text-clay/55 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Beyond Impact. Confidential and subject to disclaimer.</div>
          <div>Pioneer Impact VC · Est. {site.founded}</div>
        </div>
      </div>

      {/* Decorative oversized script */}
      <div aria-hidden className="pointer-events-none absolute -bottom-10 left-0 right-0 select-none text-center">
        <span className="script text-[24vw] leading-none text-clay/[0.04]">Beyond</span>
      </div>
    </footer>
  );
};

export default Footer;
