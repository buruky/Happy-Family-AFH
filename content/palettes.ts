/**
 * Draft color options. Values live in app/globals.css under [data-palette="..."].
 * To lock one in for launch: set DEFAULT_PALETTE and SHOW_PALETTE_PANEL = false.
 */
export const SHOW_PALETTE_PANEL = true;
export const DEFAULT_PALETTE = "evergreen";

export const palettes = [
  { id: "evergreen", name: "Evergreen & porch light", swatches: ["#1F4A3D", "#F0B54A", "#E4ECE5"] },
  { id: "harbor", name: "Harbor blue & salmonberry", swatches: ["#1E4166", "#E7A0A8", "#DFE8F1"] },
  { id: "rhododendron", name: "Rhododendron & moss", swatches: ["#7A2457", "#9DBA8A", "#F1E3EB"] },
  { id: "teal", name: "Teal & butter", swatches: ["#0E6461", "#F4D46A", "#DCEDEA"] },
] as const;

/** Runs before paint (inlined in <head>) so a saved palette doesn't flash. */
export const paletteBootScript = `try{var p=localStorage.getItem("hf-palette");if(p)document.documentElement.dataset.palette=p}catch(e){}`;
