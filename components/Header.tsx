"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h3l1.5 4-2 1.2a11 11 0 0 0 7.3 7.3l1.2-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const HouseMark = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 19 20 6l15 13" /><path d="M9 16v18h22V16" /><path d="M16.5 34v-7.5a3.5 3.5 0 0 1 7 0V34" />
  </svg>
);

/**
 * Boutique-hospitality header: solid brand bar, wordmark centered in a tab that hangs
 * below the bar (echoes the arch/doorway motif), links split either side.
 * Mobile: compact bar + full-screen menu.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const split = Math.ceil(nav.length / 2);
  const isCurrent = (href: string) => (pathname === href ? "page" : undefined);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled ? "" : undefined}>
      <nav className="wrap site-header__bar" aria-label="Main">
        <ul className="nav-links nav-links--left">
          {nav.slice(0, split).map((item) => (
            <li key={item.href}><Link href={item.href} aria-current={isCurrent(item.href)}>{item.label}</Link></li>
          ))}
        </ul>

        <Link className="wordmark" href="/" aria-label={`${site.name}, home page`}>
          <span className="wordmark__mark"><HouseMark /></span>
          <span className="wordmark__name">{site.shortName}</span>
          <small className="wordmark__sub">Adult Family Homes</small>
        </Link>

        <div className="nav-right">
          <ul className="nav-links">
            {nav.slice(split).map((item) => (
              <li key={item.href}><Link href={item.href} aria-current={isCurrent(item.href)}>{item.label}</Link></li>
            ))}
          </ul>
          <a className="btn btn--accent header-call" href={`tel:${site.phone.tel}`}>
            <PhoneIcon /><span className="header-call__long">Call {site.phone.display}</span><span className="header-call__short">Call</span>
          </a>
          <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <span className="nav-toggle__icon" aria-hidden="true" />
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <nav id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-label="Main (mobile)">
        <ul>
          {nav.map((item) => (
            <li key={item.href}><Link href={item.href} aria-current={isCurrent(item.href)}>{item.label}</Link></li>
          ))}
        </ul>
        <a className="btn btn--accent mobile-menu__call" href={`tel:${site.phone.tel}`}><PhoneIcon />Call {site.phone.display}</a>
      </nav>
    </header>
  );
}
