import Link from "next/link";
import { homes, site } from "@/content/site";
import { Todo } from "./Todo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <h2>{site.name}</h2>
          <p>Five adult family homes with awake staff overnight and a care plan for every resident.</p>
          <p>
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a><br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <h2>Our homes</h2>
          <ul>
            {homes.map((h) => (
              <li key={h.slug}><Link href={`/homes/#${h.slug}`}>{h.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Visit</h2>
          <p>Visiting hours are {site.visitingHours}. Call ahead to schedule a tour.</p>
          <ul>
            <li><Link href="/referrals/">Make a referral</Link></li>
            <li><Link href="/contact/">Contact us</Link></li>
          </ul>
        </div>
        <p className="legal">
          © {new Date().getFullYear()} {site.name}.{" "}
          {site.licenseNumbers ? `WA DSHS license ${site.licenseNumbers}` : <Todo>WA DSHS license number(s)</Todo>}
        </p>
      </div>
    </footer>
  );
}
