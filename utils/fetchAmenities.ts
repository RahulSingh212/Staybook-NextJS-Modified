import { Amenity } from "@/typings";

export const fetchAmenities = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAmenities`
  );

  const data = await res.json();
  const amenities: Amenity[] = data.ameneties;

  console.log("Fetching Amenites: " + amenities);
  return amenities;
};
