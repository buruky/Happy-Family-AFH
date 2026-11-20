import { site } from "@/content/site";
import { Todo } from "./Todo";

/** Renders a real link only once the URL exists. No dead "#" links. */
export function ReviewsLink({ className = "btn btn--ghost" }: { className?: string }) {
  if (!site.links.reviews) return <p><Todo>reviews link (after Google Business Profile setup)</Todo></p>;
  return <a className={className} href={site.links.reviews} target="_blank" rel="noopener">Read our reviews</a>;
}
