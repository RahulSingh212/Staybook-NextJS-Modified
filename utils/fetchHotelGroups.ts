import { HotelGroup } from "@/typings";

export const fetchHotelGropus = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getHotelGroups`
  );

  const data = await res.json();
  const hotelGroups: HotelGroup[] = data.hotelGroups;

  console.log("Fetching Hotel Groups: " + hotelGroups);
  return hotelGroups;
};
