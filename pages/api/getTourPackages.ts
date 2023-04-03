import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { TourPackage } from "@/typings";

const tourPackageQuery = groq`
    *[_type == "package"]
`;

type Data = {
    tourPackages: TourPackage[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tourPackages: TourPackage[] = await sanityClient.fetch(tourPackageQuery);

  res.status(200).json({ tourPackages });
}
