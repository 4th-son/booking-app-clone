import { SearchParams } from "@/app/search/page";
import { object } from "zod";

export async function fetchResults(searchParams: SearchParams) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const url = new URL(searchParams.url);
  Object.keys(searchParams).forEach((key) => {
    if (key === "url" || key === "location") return;

    const value = searchParams[key as keyof SearchParams];

    if (typeof value === "string") {
      url.searchParams.append(key, value);
    }
  });
  console.log("scrapping url >>>", url.href);

const body ={
  source: 'universal',
  parse: true,
  render: 'html',
  parsing_instructions: {
    listings: {
      _fns: [
        {
          _fn: 'xpath',
          _args: ["//@div[data-testid='property-card-container']"],
        },
      ],
    },
    total_listings: {
      _fns: [
        {
          _fn: 'xpath_one',
          _args: ['.//h1/text()'],
        }
      ]
    }

  }
}

}
