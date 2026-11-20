/**
 * Single source of truth for business facts.
 * Source: Tally intake (submission J14vWAK, 2026-11-13) + client updates 2026-11-20.
 * Rule: never invent facts. Unknown values are `null` and render as a highlighted TODO.
 */

export type Home = {
  slug: string;
  name: string;
  /** Street address lines, or null if not provided yet */
  address: [string, string] | null;
  /** Licensed beds at this home, or null if not confirmed */
  beds: number | null;
};

export const site = {
  name: "Happy Family Adult Family Homes",
  shortName: "Happy Family",
  ownerName: null as string | null, // intake gave the business name, not a person
  yearsExperience: 25, // "over 25 years as a caregiver and Adult Family Home provider"
  phone: { display: "(206) 250-7774", tel: "+12062507774" },
  email: "happyfamilyafh4@gmail.com",
  visitingHours: "9:00 AM – 7:00 PM",
  visitingDays: null as string | null, // not specified in intake
  awakeOvernight: true,
  licenseNumbers: null as string | null, // WA DSHS AFH license number(s)
  links: {
    reviews: null as string | null, // after Google Business Profile is set up
    inspectionReports: null as string | null, // DSHS facility locator page for each home
  },
  whyStarted:
    "To do my share improving the lives and well-being of vulnerable adults through the support of adult family homes.",
};

export const homes: Home[] = [
  { slug: "mountlake-terrace", name: "Mountlake Terrace", address: ["21905 55th Ave W", "Mountlake Terrace, WA 98043"], beds: null },
  { slug: "shoreline", name: "Shoreline", address: ["1228 NE 181st Pl", "Shoreline, WA 98155"], beds: null },
  { slug: "home-3", name: "Home 3", address: null, beds: null },
  { slug: "home-4", name: "Home 4", address: null, beds: null },
  { slug: "home-5", name: "Home 5", address: null, beds: null },
];

export const careGroups = [
  { title: "Daily living", summary: "Help with everyday routines, at each person's own pace.", items: ["Bathing, dressing and grooming", "Home-cooked meals and special diets", "Laundry and housekeeping"] },
  { title: "Health care", summary: "Medications and health needs handled carefully, with nurse delegation.", items: ["Medication management", "Nurse delegation", "Diabetic care", "Hospice support"] },
  { title: "Getting around", summary: "Safe transfers at home and rides when residents need to go out.", items: ["Mobility help, including a Hoyer lift", "Rides to medical appointments"] },
];

/** Standards shared by every home (listed once, not repeated per home) */
export const standards = ["Awake staff overnight", "A care plan for every resident", `Visiting ${site.visitingHours}`];

/** Google Maps directions link built from a known address */
export const directionsUrl = (h: Home) =>
  h.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.address.join(", "))}` : null;

export const payments = [
  "Private pay",
  "Medicaid / COPES (DSHS contract)",
  "WA Cares",
  "Long-term care insurance",
  "VA benefits",
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/homes/", label: "Our homes" },
  { href: "/care/", label: "Care" },
  { href: "/referrals/", label: "Referrals" },
  { href: "/contact/", label: "Contact" },
];

/** Photo slots. Drop files into /public/photos with these names. */
export const photos = {
  /** Home page hero: landscape, ~2400px wide, subject on the right third (text sits on the left) */
  hero: "/photos/hero.jpg",
  homeFront: (slug: string) => `/photos/${slug}-front.jpg`,
  homeRoom: (slug: string, room: "living" | "bedroom" | "yard") => `/photos/${slug}-${room}.jpg`,
  inside: [
    { src: "/photos/inside-living.jpg", label: "Living room", alt: "Living room with comfortable seating" },
    { src: "/photos/inside-kitchen.jpg", label: "Kitchen", alt: "Kitchen where meals are cooked each day" },
    { src: "/photos/inside-dining.jpg", label: "Dining area", alt: "Dining table set for a meal" },
    { src: "/photos/inside-bedroom.jpg", label: "A resident bedroom", alt: "A resident bedroom" },
    { src: "/photos/inside-bathroom.jpg", label: "Accessible bathroom", alt: "Accessible bathroom" },
    { src: "/photos/inside-yard.jpg", label: "Yard or patio", alt: "Yard and patio" },
  ],
  founder: "/photos/team-founder.jpg",
  team: "/photos/team-group.jpg",
};

export const addressLine = (h: Home) => (h.address ? h.address.join(", ") : null);
