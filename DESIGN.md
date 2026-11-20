# Design rationale: Happy Family Adult Family Homes

## Design type

**Trust-first local care provider site.** This is the established pattern for small healthcare and senior care businesses (clinics, home care, assisted living, adult family homes). It is a conversion-focused brochure site with three jobs, in order:

1. **Get a family to call.** Choosing an adult family home is a high-stakes decision, usually made by an adult child (roughly 45–65) on a phone, often in a hurry after a hospital discharge. They want a person, not a form.
2. **Earn trust quickly.** Families compare several homes. They look for licensing, inspection history, experience, reviews, real photos and clear payment information.
3. **Give case managers a fast referral path.** Social workers and discharge planners refer people often and want a direct, professional channel.

Every page and section exists to serve one of those jobs. Anything that didn't was left out.

## Audiences

| Audience | What they need | Where it's handled |
|---|---|---|
| Adult children choosing care | Phone number, openings, what care is provided, cost/payment, photos, trust | Header call button, hero, Care, Paying for care, Licensed and inspected |
| Older adults (future residents, spouses) | Large readable text, high contrast, obvious links | Type scale, palettes, link styles (see accessibility) |
| Case managers / social workers | Quick referral, which homes, payment types accepted | Referrals page, payment list, preferred-home field |

## Standards this follows

- **WCAG 2.2 Level AA**, the legal and industry baseline for accessibility.
- **W3C WAI, "Older Users and Web Accessibility"**, plus the NIA/NLM "Making Your Website Senior Friendly" guidelines: large text, strong contrast, plain language, visible links, simple navigation.
- **Nielsen Norman Group** usability research: senior users, carousels, form design, navigation.
- **Baymard Institute** form usability research.
- **Jakob's Law** (users expect your site to work like the sites they already use): conventional layout, no novel navigation.
- **Typography** follows *The Elements of Typographic Style* (Bringhurst): line length about 45–75 characters, a consistent modular scale.

## Page flow (home page)

The home page follows the visitor's **decision journey** (the awareness → consideration → decision model used in conversion and landing-page design). It is split into four steps instead of ten separate blocks:

| Step | Visitor's question | Content |
|---|---|---|
| 1. Welcome | "What is this, and can I call?" | Headline, call button, one full-width photo |
| 2. See inside | "What would life be like there?" | Key facts, photos inside, care provided |
| 3. Who's behind it | "Can I trust them?" | Founder story, then the proof: license, inspections, reviews |
| 4. Next step | "Which home, and what do I do now?" | Home list, then one closing panel: visit/call + payment, and the case-manager referral |

How the steps connect, and why:
- **Common region (Gestalt):** content that belongs to one step shares one background. Background changes only at step boundaries, so a color change means "new topic," not "next block."
- **Proximity and spacing rhythm:** three spacing levels (`--gap-region` > `--gap-step` > `--gap-substep`). Tight spacing means related, large spacing means a new step. Uniform padding everywhere was what made the old version feel like a stack of identical blocks.
- **Continuation cues:** elements that cross a boundary tell the eye the page continues:
  - The key-facts card overlaps the edge between the hero and step 2.
  - The page ends on one strong closing panel. It was first set to overlap the footer, but brand green over the near-black footer had too little contrast, so the edge looked broken. It now sits in its own space.
- **Proof follows the claim:** the founder story (the claim) and the license, inspection and review signals (the evidence) sit in one section, so trust builds in one place.
- **One closing call to action for both audiences:** families and case managers each get their path in a single panel, instead of the page ending with three separate CTA bands.
- *Creative choice:* step 2 opens with a shallow curve instead of a hard edge, echoing the arch photo frames. A straight edge would work just as well functionally.

## Inner pages

Every inner page uses the same skeleton, so the site reads as one system:
**intro (title, lede, and a key element beside or below it) → curved tinted region with the main content → the shared closing panel.**

| Page | Key decision | Reason |
|---|---|---|
| Our homes | Shared standards listed once at the top, then one card per home. Jump links to each home. | Repeating "awake staff overnight" five times is noise. Jump links let a family go straight to the home nearest them. |
| Our homes | "Directions" button on each home with an address | Families want to know how far the home is from them. A Google Maps link is the standard way. |
| Care | Three care cards, each with a one-line summary above its checklist | The summary is scannable for skimmers, and the list gives detail for people comparing homes. |
| Care | "Awake all night" and "a plan for one person" side by side as a pair | These are the two commitments families ask about most. Showing them as equals keeps them from becoming a wall of text. |
| Contact | One contact card next to the intro: phone (largest), email, hours, reviews | Everything needed to reach the home is in one place, and the phone is visually dominant because calling is the primary action. |
| All | `ClosingPanel` component shared by the home, Homes and Care pages | The same ending everywhere: visit/call for families, referral for case managers. |

## Decisions and why

### Layout and navigation
| Decision | Reason |
|---|---|
| Header: solid brand bar, wordmark centered in a tab hanging below the bar, links split either side, call button on the right | Boutique-hospitality pattern used by upscale residences and hotels. The hanging tab repeats the arch motif. **Trade-off:** NN/g found centered logos make "return to home" harder than left logos, so "Home" stays as an explicit first link, and on mobile the logo moves left (standard placement). The call button keeps its usual top-right spot. |
| **Call button stays visible on mobile** (beside Menu) | Most families search on phones, and click-to-call is the key conversion. Hiding it in a menu adds a step. The mobile menu itself is full-screen with large links, for easy tapping. |
| 5 nav items, plain labels ("Our homes", "Care", "Contact") | Fewer choices make decisions faster (Hick's Law). NN/g: labels in users' words, not internal jargon. |
| One primary button style per section | Clear visual hierarchy: one main action, with secondary actions as outlined buttons. |
| Content left-aligned, single column on mobile | Left alignment keeps a consistent reading edge (easier for older readers). Centered body text is harder to scan. |
| All five homes listed as a grid in step 4 | Every home gets equal visibility, unlike a carousel, where most slides go unseen. |

### Typography
| Decision | Reason |
|---|---|
| Body text 18px (1.125rem), line-height 1.6 | Senior-friendly guidelines recommend larger-than-default body text. 16px is the usual minimum, and 18px gives older readers headroom. |
| **Atkinson Hyperlegible** for body text | Designed by the Braille Institute for low-vision readers, with distinct letterforms (I/l/1, O/0). It's a functional, evidence-based choice for this audience. |
| **Young Serif** for headings | A warm, sturdy serif reads as "home," not "clinic." Headings only, so readability isn't affected. *This is a brand choice, not a standard.* Any legible, warm serif would do. |
| Line length capped at about 64 characters | Bringhurst's 45–75 character range. Long lines are hard to track, especially for older readers. |
| Modular scale (about 1.25 ratio) | Consistent hierarchy instead of arbitrary sizes. |
| No all-caps labels, no decorative eyebrows | All caps reduces readability. Labels above headings add noise without information. |

### Color
| Decision | Reason |
|---|---|
| Every palette checked to WCAG AA (4.5:1 for text) | Body text in all four options is about 14:1 or higher, and white on the brand color is 7:1 to 10:1. Checked with the WCAG contrast formula. |
| Structure: one deep brand color, one warm accent, one soft tint, near-white background | A common, proven healthcare and service palette structure. The deep color carries buttons and trust, the accent marks highlights and key-fact rules, and the tint separates sections. |
| Avoided pure white/black and harsh saturation | Reduces glare and eye strain, a common senior-friendly recommendation. |
| Four options for the client to choose from | *The hues themselves are a brand choice, not a standard.* They're grounded in the region (Pacific Northwest evergreen, Puget Sound blue, WA's state flower the rhododendron) and in healthcare norms (teal). |

### Surfaces and detail
| Decision | Reason |
|---|---|
| Radius scale: inputs 8px < photos 14px < cards 22px < closing panel 32px | Nested elements get smaller radii than their containers, so corners look concentric instead of mismatched. A consistent scale is a basic design-system practice. |
| One shadow token, soft and low | Shadows only on elements that sit "above" the page (facts card, closing panel, hero frame). No shadow on every card. |
| Photo placeholders: tonal fill, camera mark and label | The draft should look finished before photos arrive. Dashed and striped boxes read as broken. |
| Check marks instead of solid dots on care lists | A check means "included," which is what these lists say. |

### Hero
| Decision | Reason |
|---|---|
| One full-width photo instead of a carousel of the five houses | NN/g: hero carousels get little engagement beyond the first slide. Families are choosing care, not a building, so the hero shows people (caregiver and resident). All five homes are shown further down the page. |
| Desktop: text on a solid brand fade over the left side of the photo | Text over photos is a known readability risk, especially for older readers. The fade keeps the headline at full contrast whatever photo is used, so the shot must keep its subject on the right. |
| Mobile: photo on top, text below on the page background | Narrow screens leave no safe area beside the subject, so the text gets plain background. |
| The tinted section's curve and the facts card overlap the bottom of the photo | Continuation cue: the hero flows into the page instead of ending at a hard edge. |

### Interaction and components
| Decision | Reason |
|---|---|
| **Carousels: manual only, never auto-rotating**, with visible previous/next buttons and a "2 of 5" indicator | NN/g research finds auto-rotating carousels are often ignored and frustrating, and they're hard for older users and anyone using a screen reader. The W3C WAI carousel tutorial requires user control. Swipe works on phones. |
| Carousels are used only for photo sets (homes, rooms) | Photos are browsable content where showing one at a time is acceptable. Key text information is never hidden inside a carousel. |
| Buttons and tap targets at least 44–48px | WCAG 2.5.8 sets the minimum target size, and Apple and Google set 44pt and 48dp. Bigger targets help users with less precise motor control. |
| Links underlined in body text | NN/g: underlines are the most reliable signal that text is a link, and color alone fails for color-blind users (WCAG 1.4.1). |
| Visible keyboard focus, skip link, reduced-motion respected | WCAG 2.4.7, 2.4.1 and 2.3.3. |
| **Referrals page: screening info beside the form** | Case managers check fit first (payment source, care capability, location), then refer. Both are visible on arrival, and the info stays fixed on desktop while the form scrolls. On mobile the info comes first. |
| **Referral form: short, mostly single column, labels above fields** | Baymard and NN/g: single-column forms are completed faster. Only phone and email sit side by side (a closely related pair, which Baymard allows). |
| **Tap-to-select options instead of dropdowns, checkbox grids and date pickers** | Every option is visible at once and takes one tap. Timing choices ("Within 2 weeks") match how discharge planners think better than a calendar does. They're real radio and checkbox inputs, so keyboards and screen readers work. |
| **Referral form collects initials only**, with a note to share details by phone | A plain web form isn't a secure channel for protected health information. Collecting the minimum is standard practice for healthcare intake forms. |
| Contact page has no booking form (client request) | It also suits the audience: families want to talk to someone. |
| No dead links: reviews and inspection links render only once the URLs exist | A link that goes nowhere hurts trust more than having no link. |

### Trust signals
"Licensed and inspected" section: WA DSHS license number, a link to DSHS inspection reports, and reviews. These are what families and case managers check before calling, and leading AFH and senior-care sites show them prominently. Real photos of the actual homes (not stock) matter for the same reason. That's why each photo slot names a specific room and home.

### Content
| Decision | Reason |
|---|---|
| Plain language, active voice, second person | Plain-language guidance (plainlanguage.gov). Families under stress skim. |
| Every fact comes from `content/site.ts`, which comes from the intake | No invented claims. Unknown facts are `null` and render as a highlighted TODO. |

## What is a creative choice (not a standard)

Being explicit, so these can be changed without breaking anything above:
- **Arch-shaped photo frames** (like a front doorway) for the founder portrait, plus the arch curve that opens tinted sections. This is the site's one signature visual element, a metaphor for "a real home." Swapping it for a plain rounded rectangle changes the personality, not the usability.
- **The specific palette hues and the heading typeface.** The *structure* and *contrast* are standards-driven; the exact colors and serif are taste.
- **The hero headline wording.** It's grounded in intake facts (awake overnight staff), but it's copywriting.

## Not included yet (and why)

- **Current openings section and careers page**: selected on the intake but not confirmed with the client.
- **Embedded Google reviews**: the client asked for a reviews link instead, and the Business Profile isn't set up yet.
- **Online tour booking**: replaced by the contact page, at the client's request.
