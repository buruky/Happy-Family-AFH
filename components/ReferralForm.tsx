"use client";

import { useState } from "react";
import { homes, payments, site } from "@/content/site";

const careNeeds = ["Personal care", "Medication management", "Nurse delegation", "Diabetic care",
  "Hospice", "Hoyer lift / transfers", "Special diet"];
const timing = ["As soon as possible", "Within 2 weeks", "Within a month", "Just exploring"];

/**
 * Referral form for case managers and discharge planners.
 * - Short: contact, then client essentials. Tap-to-select options instead of dropdowns/date pickers.
 * - Collects initials only: no PHI over an unsecured web form.
 * - Options are real checkbox/radio inputs styled as chips (keyboard and screen reader friendly).
 * TODO: connect to a form service (Tally embed, Formspree, Netlify Forms) in handleSubmit.
 */
export function ReferralForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(`This form isn't connected yet, so nothing was sent. Please call ${site.phone.display} to make a referral.`);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} aria-labelledby="ref-form-h">
      <div className="form-card__head">
        <h2 id="ref-form-h">Send a referral</h2>
        <p>Takes about a minute. Use initials only. We&rsquo;ll get the details by phone.</p>
      </div>

      <fieldset className="form-card__group">
        <legend>Your details</legend>
        <Field id="r-name" label="Name"><input id="r-name" name="referrer_name" autoComplete="name" required /></Field>
        <Field id="r-org" label="Agency or hospital"><input id="r-org" name="organization" autoComplete="organization" required /></Field>
        <div className="field-pair">
          <Field id="r-phone" label="Phone"><input id="r-phone" name="phone" type="tel" autoComplete="tel" required /></Field>
          <Field id="r-email" label="Email"><input id="r-email" name="email" type="email" autoComplete="email" required /></Field>
        </div>
      </fieldset>

      <fieldset className="form-card__group">
        <legend>Your client</legend>
        <Field id="c-initials" label="Client initials"><input id="c-initials" name="client_initials" maxLength={4} required className="input--short" /></Field>
        <Chips label="Payment" name="payment" type="radio" options={[...payments, "Not sure yet"]} />
        <Chips label="Care needs" hint="Choose any" name="care_needs" options={careNeeds} />
        <Chips label="Move-in timing" name="timing" type="radio" options={timing} />
        <Chips label="Preferred home" hint="Optional" name="preferred_home" options={["Any", ...homes.map((h) => h.name)]} />
        <Field id="c-notes" label="Anything else" hint="Optional. Mobility, behaviors, diet. No names or dates of birth.">
          <textarea id="c-notes" name="notes" rows={3} />
        </Field>
      </fieldset>

      <div className="form-card__foot">
        <button className="btn btn--primary btn--block" type="submit">Send referral</button>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </div>
    </form>
  );
}

function Field({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}{hint && <span className="hint">{hint}</span>}</label>
      {children}
    </div>
  );
}

function Chips({ label, hint, name, options, type = "checkbox" }:
  { label: string; hint?: string; name: string; options: string[]; type?: "checkbox" | "radio" }) {
  return (
    <fieldset className="field">
      <legend className="label">{label}{hint && <span className="hint">{hint}</span>}</legend>
      <div className="chip-options">
        {options.map((o) => (
          <label key={o} className="chip-option">
            <input type={type} name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
