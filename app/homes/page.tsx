import type { Metadata } from "next";
import { Carousel } from "@/components/Carousel";
import { ClosingPanel } from "@/components/ClosingPanel";
import { Photo } from "@/components/Photo";
import { Todo } from "@/components/Todo";
import { directionsUrl, homes, photos, site, standards } from "@/content/site";

export const metadata: Metadata = {
  title: "Our homes",
  description: "Five adult family homes, including Mountlake Terrace and Shoreline, WA. Call to ask about openings.",
};

const rooms = [
  { key: "living", label: "living room" },
  { key: "bedroom", label: "a bedroom" },
  { key: "yard", label: "yard or patio" },
] as const;

/*
 * Flow: intro (what every home shares, said once) → one card per home → closing panel.
 * Jump links let a family go straight to the home near them.
 */
export default function HomesPage() {
  return (
    <>
      <section className="page-intro" aria-labelledby="homes-h">
        <div className="wrap">
          <h1 id="homes-h">Our homes</h1>
          <p className="lede">Five adult family homes under one name. Every home works the same way, so whichever is closest to your family, you know what to expect.</p>
          <ul className="standards" aria-label="In every home">
            {standards.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <nav className="jump-links" aria-label="Jump to a home">
            {homes.map((h) => <a key={h.slug} href={`#${h.slug}`}>{h.name}</a>)}
          </nav>
        </div>
      </section>

      <div className="region region--tint region--arch region--closing">
        <div className="wrap">
          <div className="home-cards">
            {homes.map((h) => {
              const directions = directionsUrl(h);
              return (
                <article className="home-card" id={h.slug} key={h.slug} aria-labelledby={`${h.slug}-h`}>
                  <Carousel label={`Photos of the ${h.name} home`} itemName="photo">
                    {[
                      <Photo key="front" src={photos.homeFront(h.slug)} alt={`${h.name} home, front of the house`} label={`${h.name}, front of the house`} shape="wide" />,
                      ...rooms.map((r) => (
                        <Photo key={r.key} src={photos.homeRoom(h.slug, r.key)} alt={`${h.name} home, ${r.label}`} label={`${h.name}, ${r.label}`} shape="wide" />
                      )),
                    ]}
                  </Carousel>
                  <div className="home-card__body">
                    <h2 id={`${h.slug}-h`}>{h.name}</h2>
                    <address>{h.address ? <>{h.address[0]}<br />{h.address[1]}</> : <Todo>address</Todo>}</address>
                    <p className="home-card__beds">{h.beds ? `Up to ${h.beds} residents` : <Todo>beds at this home</Todo>}</p>
                    <div className="btn-row">
                      <a className="btn btn--primary" href={`tel:${site.phone.tel}`}>Ask about openings</a>
                      {directions && <a className="btn btn--ghost" href={directions} target="_blank" rel="noopener">Directions</a>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <ClosingPanel showPayments={false} />
        </div>
      </div>
    </>
  );
}
