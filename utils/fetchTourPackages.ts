import { TourPackage } from "@/typings";

export const fetchTourPackages = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTourPackages`
  );

  const data = await res.json();
  const tourPackages: TourPackage[] = data.tourPackages;

  console.log("Fetching Tour Packages: " + tourPackages);
  return tourPackages;
};
