import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { HomeList } from "@/components/HomeCard";
import { ClosingPanel } from "@/components/ClosingPanel";
import { Photo } from "@/components/Photo";
import { ReviewsLink } from "@/components/ReviewsLink";
import { Todo } from "@/components/Todo";
import { careGroups, homes, photos, site } from "@/content/site";

/*
 * Page flow follows the family's decision journey (see DESIGN.md → Page flow):
 *   1. Welcome      what this is + call
 *   2. See inside   reassurance, daily life, care
 *   3. Who's behind it   founder + proof (license, inspections, reviews)
 *   4. Next step    choose a home, call, or refer
 * Related content shares one background region. Big spacing only between steps.
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Welcome: one full-width photo; text sits on a solid brand fade for guaranteed contrast */}
      <section className="hero hero--photo" aria-labelledby="hero-h">
        <div className="hero__media">
          <Photo src={photos.hero} alt="A caregiver and resident together at one of our homes" label="hero photo: caregiver with a resident, landscape, subject on the right" shape="fill" eager />
        </div>
        <div className="wrap hero__content">
          <div className="hero__text">
            <h1 id="hero-h">A real home, with care around the clock.</h1>
            <p className="lede">
              {site.shortName} runs five adult family homes. Each is a small household with awake staff overnight and a care plan written for the person living there.
            </p>
            <div className="btn-row">
              <a className="btn btn--accent" href={`tel:${site.phone.tel}`}>Call about openings</a>
              <Link className="btn btn--ghost" href="/homes/">See our homes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. See inside: one region, opened by a curve; the facts card bridges from the hero */}
      <div className="region region--tint region--arch">
        <div className="wrap">
          <ul className="facts facts--card" aria-label="What families can count on">
            <li><strong>Awake staff overnight</strong><span>Someone is up and on duty every night, not just on call.</span></li>
            <li><strong>A care plan for each person</strong><span>Care is planned around each resident&rsquo;s needs, routines and health.</span></li>
            <li><strong>{site.yearsExperience}+ years of experience</strong><span>Our founder has worked in adult family home care for more than {site.yearsExperience} years.</span></li>
            <li><strong>Open to visitors</strong><span>Family and friends are welcome from {site.visitingHours.replace(" – ", " to ")}.</span></li>
          </ul>

          <section className="step" aria-labelledby="inside-h">
            <div className="section-head">
              <h2 id="inside-h">Life inside our homes</h2>
              <p>Each home is a household, not a facility. Residents share meals and living spaces, with caregivers there day and night. <Todo>adjust once photos are in</Todo></p>
            </div>
            <Carousel label="Photos inside our homes" itemName="photo" variant="gallery">
              {photos.inside.map((p) => (
                <figure key={p.src}>
                  <Photo src={p.src} alt={p.alt} label={p.label.toLowerCase()} shape="square" />
                  <figcaption>{p.label}</figcaption>
                </figure>
              ))}
            </Carousel>
          </section>

          <section className="substep split" aria-labelledby="care-h">
            <div>
              <h3 id="care-h" className="h2">Help with daily life and health care</h3>
              <p>From bathing and dressing to medications and hospice support, our caregivers help with what each resident needs, in the same home every day.</p>
              <Link className="btn btn--primary" href="/care/">See the care we provide</Link>
            </div>
            <ul className="check-list check-list--panel">
              {careGroups.flatMap((g) => g.items).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
      </div>

      {/* 3. Who's behind it: the person, then the proof, in one section */}
      <section className="region" aria-labelledby="story-h">
        <div className="wrap">
          <div className="split split--story">
            <Photo src={photos.founder} alt="Our founder" label="owner / founder portrait" shape="arch" />
            <div>
              <h2 id="story-h">The people behind {site.shortName}</h2>
              <blockquote>&ldquo;To do my share improving the lives and well-being of vulnerable adults.&rdquo;</blockquote>
              <p>
                Our founder, {site.ownerName ?? <Todo>owner&rsquo;s name</Todo>}, has spent more than {site.yearsExperience} years as a caregiver and adult family home provider. Every home is run the same way: a care plan built around each resident and staff who know them by name.
              </p>
            </div>
          </div>

          <div className="trust substep" aria-label="Licensing and reviews">
            <div>
              <h3>State licensed</h3>
              <p>Each home is licensed by Washington State DSHS. {site.licenseNumbers ?? <Todo>license number(s)</Todo>}</p>
            </div>
            <div>
              <h3>Inspection reports</h3>
              <p>
                {site.links.inspectionReports
                  ? <a href={site.links.inspectionReports}>View our DSHS inspection reports</a>
                  : <Todo>link to DSHS facility reports</Todo>}
              </p>
            </div>
            <div>
              <h3>What families say</h3>
              <ReviewsLink />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Next step: choose a home, then one closing panel for both audiences */}
      <section className="region region--flush-top region--closing" aria-labelledby="homes-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="homes-h">Find the home that fits</h2>
            <p>All five homes share the same name and the same way of caring. Call to ask which homes have a bed open.</p>
          </div>
          <HomeList homes={homes} />

          <ClosingPanel />
        </div>
      </section>
    </>
  );
}
