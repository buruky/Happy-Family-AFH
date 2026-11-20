import type { Metadata } from "next";
import { ReferralForm } from "@/components/ReferralForm";
import { Todo } from "@/components/Todo";
import { careGroups, homes, payments, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Refer a client",
  description: `Case managers and discharge planners: refer a client to ${site.name}. Medicaid/COPES accepted, awake staff overnight, nurse delegation, hospice support and Hoyer lift.`,
};

/*
 * Layout: screening info (left) beside the form (right), both visible on arrival.
 * Case managers check payment and care fit first, then refer, so that's the reading order.
 */
export default function ReferralsPage() {
  const care = careGroups.flatMap((g) => g.items);

  return (
    <section className="referral" aria-labelledby="ref-h">
      <div className="wrap referral__grid">
        <div className="referral__info">
          <h1 id="ref-h">Refer a client</h1>
          <p className="lede">For case managers, social workers and discharge planners. Check the fit below, then send a referral or call us directly.</p>

          <a className="referral__call" href={`tel:${site.phone.tel}`}>
            <span>Urgent placement? Call</span>
            <strong>{site.phone.display}</strong>
          </a>

          <dl className="fit-list">
            <div>
              <dt>Payment accepted</dt>
              <dd><ul className="chips">{payments.map((p) => <li key={p}>{p}</li>)}</ul></dd>
            </div>
            <div>
              <dt>Care we provide</dt>
              <dd><ul className="check-list check-list--compact">{care.map((c) => <li key={c}>{c}</li>)}</ul></dd>
            </div>
            <div>
              <dt>Staffing</dt>
              <dd>Awake staff overnight in every home</dd>
            </div>
            <div>
              <dt>Homes</dt>
              <dd>
                {homes.length} homes, including {homes.filter((h) => h.address).map((h) => h.name).join(" and ")}.{" "}
                {homes.some((h) => !h.address) && <Todo>remaining home locations</Todo>}
              </dd>
            </div>
          </dl>
        </div>

        <ReferralForm />
      </div>
    </section>
  );
}
