import { notFound } from "next/navigation";
import React from "react";

type Props = { searchParams: SearchParams };
type SearchParams = {
  url: URL;
  ss: string;
  checkin: string;
  checkout: string;
  src: string;
  group_adults: string;
  group_children: string;
  no_rooms: string;
};
function SearchPage({ searchParams }: Props) {
  if (!searchParams.url) {
    return notFound();
  }
  return <div>Search page</div>;
}

export default SearchPage;
