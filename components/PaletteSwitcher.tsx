"use client";

import { useEffect, useState } from "react";
import { DEFAULT_PALETTE, SHOW_PALETTE_PANEL, palettes } from "@/content/palettes";

/** Draft-only panel for reviewing color options with the client. */
export function PaletteSwitcher() {
  const [current, setCurrent] = useState<string>(DEFAULT_PALETTE);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setCurrent(document.documentElement.dataset.palette || DEFAULT_PALETTE);
    setHidden(sessionStorage.getItem("hf-palette-hidden") === "1");
  }, []);

  if (!SHOW_PALETTE_PANEL || hidden) return null;

  const choose = (id: string) => {
    document.documentElement.dataset.palette = id;
    localStorage.setItem("hf-palette", id);
    setCurrent(id);
  };

  return (
    <div className="palette-panel" role="group" aria-label="Color options (draft preview)">
      <p>Color options (draft)</p>
      <div>
        {palettes.map((p) => (
          <button key={p.id} type="button" aria-pressed={current === p.id} onClick={() => choose(p.id)}>
            <span className="sw" aria-hidden="true">{p.swatches.map((c) => <i key={c} style={{ background: c }} />)}</span>
            {p.name}
          </button>
        ))}
      </div>
      <button className="close" type="button" aria-label="Hide color options"
        onClick={() => { sessionStorage.setItem("hf-palette-hidden", "1"); setHidden(true); }}>✕</button>
    </div>
  );
}
