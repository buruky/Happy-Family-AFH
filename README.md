# Happy Family Adult Family Homes: website

Next.js (App Router) + React + TypeScript, exported as a static site. Design rationale: [DESIGN.md](DESIGN.md).

## Commands
```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
npm run typecheck
```

## Where things live
| Path | What |
|---|---|
| `content/site.ts` | **All business facts** (phone, email, homes, services, payments). Edit here, not in pages. `null` = unknown and shows as a TODO. |
| `content/palettes.ts` | Color options and the draft switcher toggle |
| `app/globals.css` | Design tokens (palettes, type scale, spacing) and component styles |
| `app/*/page.tsx` | Pages: home, homes, care, referrals, contact |
| `components/` | Header, Footer, Carousel, Photo, ReferralForm, HomeCard, PaletteSwitcher, Todo |
| `public/photos/` | Photos (see below) |

## Color options (draft)
A panel in the bottom-left corner switches between four palettes. To lock one in: set `DEFAULT_PALETTE` and `SHOW_PALETTE_PANEL = false` in `content/palettes.ts`.

## Photos
Put files in `public/photos/` with these names and they replace the placeholders automatically. Each home's slug is set in `content/site.ts`.

| File | Where it shows |
|---|---|
| `hero.jpg` | Home page hero, full width. **Landscape, about 2400px wide, subject on the right third** (text sits on the left) |
| `<slug>-front.jpg` | Home cards and the Homes page |
| `<slug>-living.jpg`, `<slug>-bedroom.jpg`, `<slug>-yard.jpg` | That home's carousel on the Homes page (landscape) |
| `inside-living.jpg`, `inside-kitchen.jpg`, `inside-dining.jpg`, `inside-bedroom.jpg`, `inside-bathroom.jpg`, `inside-yard.jpg` | "Inside our homes" gallery (square crop) |
| `team-founder.jpg` | Founder story (portrait, arch) |
| `team-group.jpg` | Care page (landscape) |

Current slugs: `mountlake-terrace`, `shoreline`, `home-3`, `home-4`, `home-5`. Rename the last three once their addresses are known. Export at about 1600px on the long side.

## Before launch
Search the built site for `TODO:` (highlighted on the page), then fill in the `null` values in `content/site.ts`:
- `ownerName`, `licenseNumbers`, `visitingDays`, each home's `address` and `beds`
- `links.reviews` (after the Google Business Profile is set up), `links.inspectionReports`
- Connect the referral form in `components/ReferralForm.tsx`
- Logo and favicon (`app/icon.png`), then turn off the palette panel
- Not confirmed with the client yet: current-openings section, careers page
