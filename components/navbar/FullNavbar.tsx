import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SearchBar from "./searchbar/SearchBar";
import { USER_ACCESS_TOKEN } from "@/lib/helper";
import { fetchUserImageUrl } from "@/lib/firebase/userHandler";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  fullNavbar: boolean;
  setFullNavbar: any;
};

export default function FullNavbar(props: Props) {
  const router = useRouter();
  const hotelUrlHandler = (hotelId: string) => {
    props.setFullNavbar(false);
    router.push({
      pathname: `/hotel/google/list/${hotelId}/`,
      query: {
        checkin: String(moment(new Date()).format("DD-MM-YYYY")),
        num_nights: String(1),
        num_guests: String(2),
        hotel_id: String(hotelId),
      },
    });
  };

  const [hotelsList, setHotelsList] = React.useState<any[]>([
    {
      name: "Hotel Aira Xing by Staybook",
      hotelId: `24669`,
    },
    { name: "Staybook Jyoti Mahal A Heritage Hotel", hotelId: "25095" },
    {
      name: "Staybook Hotel Jai Balaji New Delhi Train Station",
      hotelId: "23690",
    },
    { name: "Staybook Hotel Pinky Villa", hotelId: "23540" },
    { name: "Staybook Atlanta New Delhi Train Station", hotelId: "24712" },
    { name: "Staybook WoodsView Mall Road Mussorie", hotelId: "12348" },
    { name: "Staybook Shivdev New Delhi Railway Station", hotelId: "" },
    { name: "Staybook BlueSky Camp, Manali", hotelId: "12347" },
    { name: "Staybook@South Delhi", hotelId: "12349" },
    { name: "Staybook City Stories New Delhi Train Station", hotelId: "12346" },
    { name: "Corbett Paradiso Resort By Staybook", hotelId: "12345" },
  ]);

  return (
    <React.Fragment>
      <motion.div
        className={`fixed flex flex-col left-0 top-0 w-screen h-screen z-50 bg-[#fff] px-8 py-6 md:px-12 md:py-8`}
      >
        <div className={`relative w-full flex justify-between mb-2 md:mb-4`}>
          <div
            className={`relative flex items-center align-middle h-10 w-40 md:h-16 md:w-56 my-auto`}
          >
            <Image
              src={`/logo.png`}
              alt="icon"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className={``}
            />
          </div>
          <div
            onClick={() => {
              props.setFullNavbar(!props.fullNavbar);
            }}
            className={`relative flex my-auto items-center align-middle h-8 w-8 md:h-10 md:w-10 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer`}
          >
            <Image
              src={`/close.png`}
              alt="img"
              layout="fill"
              objectFit="cover"
              className="p-2"
            />
          </div>
        </div>
        <div
          className={`relative w-full h-full flex justify-between flex-col overflow-y-scroll md:flex-row md:flex-wrap space-y-2 no-scrollbar`}
        >
          <div className={`relative flex flex-col`}>
            <h2
              className={`text-center font-semibold text-4xl font-serif text-gray-400 mb-3`}
            >
              Hotels
            </h2>
            <div className={`relative flex flex-col space-y-2 no-scrollbar`}>
              {hotelsList.map((hotel: any, index: number) => (
                <div
                  key={index}
                  className={`text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`}
                  onClick={hotelUrlHandler.bind(null, hotel.hotelId)}
                >
                  {hotel.name}
                </div>
              ))}
            </div>
          </div>
          <div className={`relative flex flex-col`}>
            <h2
              className={`text-center font-semibold text-4xl font-serif text-gray-400 mb-3`}
            >
              Profile
            </h2>
            <div className={`relative flex flex-col space-y-2 no-scrollbar`}>
              <Link href={"/profile"}>
                <div
                  className={`text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`}
                  onClick={() => {
                    props.setFullNavbar(false);
                  }}
                >
                  Login
                </div>
              </Link>
              <Link href={"/profile"}>
                <div
                  className={`text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`}
                  onClick={() => {
                    props.setFullNavbar(false);
                  }}
                >
                  My Profile
                </div>
              </Link>
              <Link href={"/profile/personal-info"}>
                <div
                  className={`text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`}
                  onClick={() => {
                    props.setFullNavbar(false);
                  }}
                >
                  Personal Info
                </div>
              </Link>
              <Link href={"/profile/my-bookings"}>
                <div
                  className={`text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`}
                  onClick={() => {
                    props.setFullNavbar(false);
                  }}
                >
                  My Bookings
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`relative flex w-full py-2 mx-auto justify-center align-middle items-center`}
        >
          <button
            onClick={() => {
              props.setFullNavbar(false);
              router.push("/hotel");
            }}
            className={`relative px-4 py-2 w-fit bg-[#cf8f24] text-white rounded-md`}
          >
            Book Hotel
          </button>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
