import React from "react";
import fetch from "node-fetch";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";
import { addDays, format } from "date-fns";
import AmountCard from "../AmountCard/AmountCard";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MapIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import BookingPriceCard from "./BookingPriceCard";
import { RoomDetails } from "@/classModels/bookings/roomDetails";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";

type Props = {
  userBooking: BookingDetails;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;
};

const hotelBookingHandler = async (userBooking: BookingDetails) =>  {
  const response = await fetch("/api/booking/setHotelBooking", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
}

export const stayflexiHandler = async (
  hotelId: any,
  fromDate: any,
  toDate: any
) => {
  const response = await fetch("/api/hotel/hotelPricePlanner", {
    method: "POST",
    body: JSON.stringify({ hotelId, fromDate, toDate }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("API Handler Function");
  console.log(data);
  return data;
};

export default function BookingCard(props: Props) {
  const router = useRouter();
  const [hotel_id, setHotelId] = React.useState<String>("");
  const [checkin, setCheckin] = React.useState<Date>(new Date());
  const [checkout, setCheckout] = React.useState<Date>(addDays(new Date(), 1));
  const [num_nights, setNum_nights] = React.useState<number>(1);
  const [num_guests, setNum_guests] = React.useState<number>(2);

  React.useEffect(() => {
    setHotelId(String(router.query.hotel_id));
    setNum_nights(Number(router.query.num_guests));
    setNum_guests(Number(router.query.num_guests));
    setCheckin(moment(router.query.checkin, "DD-MM-YYYY").toDate());
    setCheckout(
      addDays(
        moment(router.query.checkin, "DD-MM-YYYY").toDate(),
        Number(router.query.num_nights)
      )
    );
  }, [
    router.query.hotel_id,
    router.query.checkin,
    router.query.num_guests,
    router.query.num_nights,
  ]);

  const fetchStayFlexiHotelPrices = async () => {
    const fromDate = String(moment(checkin).format("DD-MM-YYYY"));
    const toDate = String(moment(checkout).format("DD-MM-YYYY"));
    const responseData = await stayflexiHandler(hotel_id, fromDate, toDate);
    console.log(responseData);
  };

  const createNewHotelBooking = async () => {
    const responseData = await hotelBookingHandler(props.userBooking);
    console.log(responseData);
  }

  return (
    <React.Fragment>
      <motion.div
        className={`sticky w-full md:w-[37.5%] h-full bg-white py-6 px-4 rounded-xl top-20 right-0 shadow-xl`}
      >
        <motion.div className={`w-full pb-4`}>
          <h1 className={`text-6xl font-semibold text-gray-500`}>
            ₹{props.userBooking.getTotalRoomCost.toFixed(2)}
          </h1>
        </motion.div>

        <motion.div
          className={`relative flex flex-col w-full mb-4 shadow-md bg-white rounded-2xl`}
        >
          <motion.div
            className={`relative w-full flex justify-between border-red-950 border-[1px] rounded-t-lg`}
          >
            <motion.div
              className={`relative flex flex-col w-[50%] px-4 py-2 border-r-[1px] border-red-950`}
            >
              <motion.div className={`text-xs font-semibold`}>
                CHECK-IN
              </motion.div>
              <motion.div className={`text-xl font-medium`}>
                {format(checkin, "dd MMMM yy")}
              </motion.div>
            </motion.div>
            <motion.div className={`relative flex flex-col w-[50%] px-4 py-2`}>
              <motion.div className={`text-xs font-semibold`}>
                CHECK-OUT
              </motion.div>
              <motion.div className={`text-xl font-medium`}>
                {format(checkout, "dd MMMM yy")}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className={`relative w-ful flex flex-col justify-between px-4 py-2 border-red-950 border-[1px] rounded-b-lg`}
          >
            <motion.div className={`text-xs font-semibold`}>GUESTS</motion.div>
            <motion.div className={`text-xl font-medium`}>
              {num_guests} guests
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className={`w-full rounded-lg px-1 mb-2`}>
          <p className={`text-xl font-sans`}>
            {props.userBooking.getTotalRoomCount} rooms
          </p>
        </motion.div>

        {props.userBooking.roomsList.length > 0 && (
          <motion.div
            className={`relative w-full flex flex-col items-center align-middle my-3 overflow-y-scroll h-36 py-2 shadow-md space-y-2`}
          >
            {props.userBooking.roomsList.map((planInfo: any, index: number) => (
              <BookingPriceCard
                key={index}
                planIndex={index}
                planInfo={planInfo}
                userBooking={props.userBooking}
                setRoomCount={props.setRoomCount}
                setTotalRoomCost={props.setTotalRoomCost}
                setTotalTax={props.setTotalTax}
                setTotalPrice={props.setTotalPrice}
              />
            ))}
          </motion.div>
        )}
        <motion.div
          className={`relative w-full flex flex-col align-middle items-center justify-between rounded-lg py-2 px-2 bg-white mt-2 mb-6 shadow-lg`}
        >
          <motion.div
            className={`w-full relative flex flex-row align-middle items-center justify-between pb-1`}
          >
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              Room Price
            </motion.div>
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              ₹{props.userBooking.getTotalRoomCost.toFixed(2)}
            </motion.div>
          </motion.div>
          <motion.div
            className={`w-full relative flex flex-row align-middle items-center justify-between pb-1`}
          >
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              Tax
            </motion.div>
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              ₹{props.userBooking.getTotalTax.toFixed(2)}
            </motion.div>
          </motion.div>
          <motion.div className={`w-full border-2`}></motion.div>
          <motion.div
            className={`w-full relative flex flex-row align-middle items-center justify-between pt-1`}
          >
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              Total Cost
            </motion.div>
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              ₹{props.userBooking.getTotalPrice.toFixed(2)}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`w-full text-center text-lg font-semibold bg-red-700 rounded-lg hover:bg-red-600 text-white py-4 cursor-pointer`}
          onClick={createNewHotelBooking}
        >
          Book Now!
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}

// BookingCard.defaultProps = {
//   plan_price: 0,
//   checkin: new Date(),
//   chechout: addDays(new Date(), 1),
//   num_rooms: 0,
// };
