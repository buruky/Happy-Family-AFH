import Link from "next/link";
import { addressLine, photos, type Home } from "@/content/site";
import { Photo } from "./Photo";
import { Todo } from "./Todo";

export function HomeCard({ home }: { home: Home }) {
  return (
    <li>
      <Link href={`/homes/#${home.slug}`}>
        <Photo src={photos.homeFront(home.slug)} alt={`Front of the ${home.name} home`} label={`front of ${home.name}`} />
        <h3>{home.name}</h3>
        <p>{addressLine(home) ?? <Todo>address</Todo>}</p>
      </Link>
    </li>
  );
}

export function HomeList({ homes }: { homes: Home[] }) {
  return <ul className="home-list">{homes.map((h) => <HomeCard key={h.slug} home={h} />)}</ul>;
}
