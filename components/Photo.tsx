"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Shown in the placeholder until the real photo exists */
  label: string;
  shape?: "default" | "arch" | "wide" | "square" | "fill";
  /** Load immediately (for the hero / above-the-fold images) */
  eager?: boolean;
};

/**
 * Photo slot. Renders the image if the file exists in /public/photos,
 * otherwise a labelled placeholder so the layout is final before photos arrive.
 */
export function Photo({ src, alt, label, shape = "default", eager = false }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [missing, setMissing] = useState(false);

  // The image may fail before hydration, so check its state on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  return (
    <div className={`photo photo--${shape}${missing ? " is-missing" : ""}`} data-label={`Photo coming: ${label}`}>
      {!missing && (
        // Plain <img>: next/image adds nothing with static export (images are unoptimized)
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={src} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} decoding="async" onError={() => setMissing(true)} />
      )}
    </div>
  );
}
