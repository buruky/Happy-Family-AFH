import type { Metadata } from "next";
import { ClosingPanel } from "@/components/ClosingPanel";
import { Photo } from "@/components/Photo";
import { careGroups, photos } from "@/content/site";

export const metadata: Metadata = {
  title: "Care and services",
  description: "Personal care, medication management, nurse delegation, diabetic care, hospice support, Hoyer lift, transportation and home-cooked meals.",
};

/*
 * Flow: intro with team photo → what we help with (three groups) → how care works (two commitments) → closing panel with payment.
 */
export default function CarePage() {
  return (
    <>
      <section className="page-intro page-intro--split" aria-labelledby="care-h">
        <div className="wrap">
          <div>
            <h1 id="care-h">The care we provide</h1>
            <p className="lede">Every resident has a care plan written around their needs. Our caregivers help with daily routines and health care, in the same home every day.</p>
          </div>
          <Photo src={photos.team} alt="Our caregiving team" label="caregiving team together" shape="wide" />
        </div>
      </section>

      <div className="region region--tint region--arch">
        <div className="wrap">
          <div className="section-head">
            <h2>What we help with</h2>
          </div>
          <div className="care-cards">
            {careGroups.map((g) => (
              <section className="care-card" key={g.title} aria-labelledby={`cg-${g.title}`}>
                <h3 id={`cg-${g.title}`}>{g.title}</h3>
                <p>{g.summary}</p>
                <ul className="check-list check-list--compact">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </section>
            ))}
          </div>

          <div className="pair substep">
            <section aria-labelledby="overnight-h">
              <h2 id="overnight-h" className="h3">Someone awake, all night</h2>
              <p>Our homes have awake staff overnight. If a resident needs help at 3 AM, a caregiver is already up and in the house.</p>
            </section>
            <section aria-labelledby="plan-h">
              <h2 id="plan-h" className="h3">A plan made for one person</h2>
              <p>Before someone moves in, we learn their health needs, routines and preferences, and write a care plan around them. As needs change, the plan changes too.</p>
            </section>
          </div>
        </div>
      </div>

      <section className="region region--flush-top region--closing" aria-label="Next steps">
        <div className="wrap">
          <ClosingPanel title="Questions about care or cost?" text="Call us and we'll go through your family's needs and payment options together." />
        </div>
      </section>
    </>
  );
}
