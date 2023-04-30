import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";
import { RoomDetails } from "@/widgets/bookings/roomDetails";
import { BookingDetails } from "@/widgets/bookings/bookingDetails";

// type Props = {
//   planInfo: any;
//   selectedRoomsList: RoomDetails[];
//   setSelectedRoomsList: Function;

//   hotel_firebase_Unique_Id: String;
//   hotel_Room_Type: String;

//   roomCount: number;
//   totalRoomCost: number;
//   totalTax: number;
//   totalPrice: number;
//   setRoomCount: Function;
//   setTotalRoomCost: Function;
//   setTotalTax: Function;
//   setTotalPrice: Function;
// };

type Props = {
  planInfo: any;
  userBooking: BookingDetails;
  roomName: String;
  roomInfo: String;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;
}

export default function PlanCard(props: Props) {
  const router = useRouter();
  const [num_child, setNumChild] = React.useState<number>(0);
  const [num_infants, setNumInfants] = React.useState<number>(0);

  const roomPlanHandler = () => {

    const rd = new RoomDetails();
    rd.room_Name = `${props.roomName}`;
    rd.room_Info = `${props.roomInfo}`;
    rd.plan_Name = `${props.planInfo.title}`;
    rd.plan_Info = `${props.planInfo.info}`;
    rd.plan_Price = Number(`${props.planInfo.price}`);
    rd.num_Guests = Number(`${router.query.num_guests}`);
    rd.num_Children = Number(`${num_child}`);
    rd.num_Infants = Number(`${num_infants}`);

    props.userBooking.addNewRoom(rd);
    props.setRoomCount(props.userBooking.getTotalRoomCount);
    props.setTotalRoomCost(props.userBooking.getTotalRoomCost);
    props.setTotalTax(props.userBooking.getTotalTax);
    props.setTotalPrice(props.userBooking.getTotalPrice);
  };

  return (
    <React.Fragment>
      <motion.div
        className={`relative w-full flex flex-col md:flex-row rounded-md shadow-lg px-4 py-3`}
      >
        <motion.div
          className={`relative w-full md:w-[25%] flex flex-col justify-evenly`}
        >
          <motion.div className={`relative w-full`}>
            <h2
              className={`font-sans font-medium text-lg sm:text-2xl text-gray-500`}
            >
              {props.planInfo.title}
            </h2>
          </motion.div>
          <motion.div className={`relative w-full`}>
            <h2
              className={`font-sans font-light text-md sm:text-xl text-gray-500`}
            >
              {props.planInfo.info}
            </h2>
          </motion.div>
        </motion.div>
        <motion.div
          className={`relative w-full md:w-[60%] flex flex-col align-middle items-center md:px-2 my-4 md:my-0`}
        >
          <motion.div className={`relative w-full mb-2`}>
            <h3
              className={`font-sans font-medium text-xs text-center md:text-left text-gray-500 underline`}
            >
              Amenities
            </h3>
          </motion.div>
          <motion.div className={`relative w-full flex flex-col space-y-1`}>
            {props.planInfo.features.map((amenityName: any, index: number) => (
              <div
                key={String(index)}
                className={`relative flex items-center align-middle`}
              >
                <div className={`text-xs pr-1`}>✓</div>
                <div className={``}>
                  <p className={`text-sm text-gray-500`}>{amenityName}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className={`relative w-full md:w-[15%] flex md:flex-col align-middle items-center justify-between md:justify-around`}
        >
          <motion.div className={`relative`}>
            <h1
              className={`font-sans text-center font-medium text-lg sm:text-2xl text-gray-500`}
            >
              ₹{props.planInfo.price}
            </h1>
          </motion.div>
          <motion.div
            onClick={roomPlanHandler}
            className={`relative w-fit bg-red-700 hover:bg-red-600 py-2 px-4 cursor-pointer rounded-lg align-middle items-center`}
          >
            <p className={`text-white text-lg font-light text-center`}>
              Select
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
