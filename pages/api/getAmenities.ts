import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

import { Amenity } from "../../typings";

const query = groq`
    *[_type == "amenety"]
`;

type Data = {
    ameneties: Amenity[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ameneties: Amenity[] = await sanityClient.fetch(query);
  res.status(200).json({ ameneties });
}
