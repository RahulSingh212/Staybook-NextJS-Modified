import { Hotel } from "@/typings";

export const fetchHotels = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHotels`);

  const data = await res.json();
  const hotels: Hotel[] = data.hotels;

  console.log("Fetching Hotels: " + hotels);
  return hotels;
};
