import { payments } from "@/content/site";

export function PaymentList() {
  return <ul className="chips">{payments.map((p) => <li key={p}>{p}</li>)}</ul>;
}
