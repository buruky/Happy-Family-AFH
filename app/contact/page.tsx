import type { Metadata } from "next";
import Link from "next/link";
import { HomeList } from "@/components/HomeCard";
import { ReviewsLink } from "@/components/ReviewsLink";
import { Todo } from "@/components/Todo";
import { homes, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.phone.display} or email ${site.email} to ask about openings or schedule a visit.`,
};

/*
 * Flow: intro + one contact card (everything needed to reach us, in one place) → the homes.
 */
export default function ContactPage() {
  return (
    <>
      <section className="page-intro page-intro--split" aria-labelledby="contact-h">
        <div className="wrap">
          <div>
            <h1 id="contact-h">Contact us</h1>
            <p className="lede">Call or email to ask about openings, cost or care, or to set up a visit to one of our homes.</p>
            <p>Please call before visiting so someone is ready to show you around. Case managers can also <Link href="/referrals/">send a referral online</Link>.</p>
          </div>

          <div className="contact-card">
            <div className="contact-card__row contact-card__row--main">
              <span>Call</span>
              <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            </div>
            <div className="contact-card__row">
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-card__row">
              <span>Visiting hours</span>
              <p>{site.visitingHours}{" "}{site.visitingDays ?? <Todo>which days</Todo>}</p>
            </div>
            <div className="contact-card__row">
              <span>Reviews</span>
              <ReviewsLink className="contact-card__link" />
            </div>
          </div>
        </div>
      </section>

      <section className="region region--tint region--arch" aria-labelledby="contact-homes-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="contact-homes-h">Our five homes</h2>
            <p>Select a home to see photos and directions.</p>
          </div>
          <HomeList homes={homes} />
        </div>
      </section>
    </>
  );
}
