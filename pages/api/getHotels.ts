import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Hotel } from "@/typings";

const hotelQuery = groq`
    *[_type == "hotel"]
`;

type Data = {
  hotels: Hotel[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hotels: Hotel[] = await sanityClient.fetch(hotelQuery);

  res.status(200).json({ hotels });
}
