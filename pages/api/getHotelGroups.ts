import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { HotelGroup } from "@/typings";

const hotelGroupQuery = groq`
    *[_type == "navoptions"]
`;

type Data = {
  hotelGroups: HotelGroup[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hotelGroups: HotelGroup[] = await sanityClient.fetch(hotelGroupQuery);

  res.status(200).json({ hotelGroups });
}
