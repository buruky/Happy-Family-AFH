import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Young_Serif } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PaletteSwitcher } from "@/components/PaletteSwitcher";
import { DEFAULT_PALETTE, paletteBootScript } from "@/content/palettes";
import { site } from "@/content/site";
import "./globals.css";

// next/font self-hosts the fonts: no request to Google at runtime, no layout shift.
const atkinson = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-atkinson" });
const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-young-serif" });

export const metadata: Metadata = {
  title: { default: `${site.name} | Care in a real home`, template: `%s | ${site.name}` },
  description:
    "Five adult family homes with awake staff overnight and an individualized care plan for every resident. Medicaid/COPES, private pay, WA Cares, long-term care insurance and VA benefits accepted.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette={DEFAULT_PALETTE} className={`${atkinson.variable} ${youngSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: paletteBootScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <PaletteSwitcher />
      </body>
    </html>
  );
}
