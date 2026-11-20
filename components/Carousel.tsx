"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  /** What one slide is called, for button labels ("photo", "home") */
  itemName?: string;
  variant?: "single" | "gallery";
  className?: string;
  children: React.ReactNode[];
};

/**
 * Manual carousel following the W3C WAI carousel guidance:
 * no auto-rotation, visible previous/next buttons, a position indicator,
 * keyboard arrows, and native swipe/scroll via CSS scroll-snap.
 */
export function Carousel({ label, itemName = "slide", variant = "single", className = "", children }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ first: 1, last: 1, atStart: true, atEnd: false });
  const total = children.length;

  const stepSize = useCallback(() => {
    const el = track.current;
    const slide = el?.firstElementChild as HTMLElement | null;
    if (!el || !slide) return 0;
    return slide.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || "0");
  }, []);

  const update = useCallback(() => {
    const el = track.current;
    const step = stepSize();
    if (!el || !step) return;
    const perView = Math.max(1, Math.round(el.clientWidth / step));
    const first = Math.min(total, Math.round(el.scrollLeft / step) + 1);
    setState({
      first,
      last: Math.min(total, first + perView - 1),
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= el.scrollWidth - el.clientWidth - 2,
    });
  }, [stepSize, total]);

  useEffect(() => {
    update();
    const el = track.current;
    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => { clearTimeout(t); t = setTimeout(update, 60); };
    el?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => { el?.removeEventListener("scroll", onScroll); window.removeEventListener("resize", update); };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.current?.scrollBy({ left: dir * stepSize(), behavior: reduce ? "auto" : "smooth" });
  };

  const status = state.last > state.first ? `${state.first}–${state.last} of ${total}` : `${state.first} of ${total}`;

  return (
    <section className={`carousel carousel--${variant} ${className}`.trim()} aria-roledescription="carousel" aria-label={label}>
      <div
        ref={track}
        className="carousel__track"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
      >
        {children.map((child, i) => (
          <div key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${total}`}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel__controls">
        <button className="carousel__btn" type="button" onClick={() => go(-1)} disabled={state.atStart} aria-label={`Previous ${itemName}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button className="carousel__btn" type="button" onClick={() => go(1)} disabled={state.atEnd} aria-label={`Next ${itemName}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
        <span className="carousel__status" aria-live="polite">{status}</span>
      </div>
    </section>
  );
}
