import Link from "next/link";
import { site } from "@/content/site";
import { PaymentList } from "./PaymentList";

type Props = {
  title?: string;
  text?: string;
  showPayments?: boolean;
  showReferral?: boolean;
};

/** The one closing call to action every page ends on: visit/call for families, referral for case managers. */
export function ClosingPanel({
  title = "Come see a home",
  text = "The best way to know if a home is right is to visit. Call or email to set up a time.",
  showPayments = true,
  showReferral = true,
}: Props) {
  return (
    <div className={`next-steps${showReferral ? "" : " next-steps--single"}`}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <a className="btn btn--accent" href={`tel:${site.phone.tel}`}>Call {site.phone.display}</a>
          <a className="btn btn--ghost" href={`mailto:${site.email}`}>Email us</a>
        </div>
        {showPayments && (
          <>
            <h3 className="next-steps__pay">Ways to pay</h3>
            <PaymentList />
          </>
        )}
      </div>
      {showReferral && (
        <div className="next-steps__aside">
          <h3>Case managers and social workers</h3>
          <p>Send us a referral and we&rsquo;ll get back to you about availability.</p>
          <Link className="btn btn--ghost" href="/referrals/">Make a referral</Link>
        </div>
      )}
    </div>
  );
}
