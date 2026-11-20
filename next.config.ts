import type { NextConfig } from "next";

// Static export: every page is pre-rendered to plain HTML in /out,
// so the site can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, shared hosting).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // required for static export; export photos at ~1600px
};

export default nextConfig;
