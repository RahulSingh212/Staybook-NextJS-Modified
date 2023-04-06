import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const hotelGroupQuery = groq`
    *[_type == "navoptions"]
`;

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

}