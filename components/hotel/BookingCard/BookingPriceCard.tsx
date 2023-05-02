import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { RoomDetails } from "@/classModels/bookings/roomDetails";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";

type Props = {
  planInfo: RoomDetails;
  planIndex: number;
  userBooking: BookingDetails;

  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;
};

export default function BookingPriceCard(props: Props) {
  const removeHotelPlan = () => {
    props.userBooking.removeRoom(props.planInfo, props.planIndex);
    props.setRoomCount(props.userBooking.getTotalRoomCount);
    props.setTotalRoomCost(props.userBooking.getTotalRoomCost);
    props.setTotalTax(props.userBooking.getTotalTax);
    props.setTotalPrice(props.userBooking.getTotalPrice);
  };

  const updateChildToPlan = (event: any) => {
    let val = Number(event.target.value);
    props.userBooking.updateChildToRoom(props.planIndex, val);
    props.setTotalRoomCost(props.userBooking.getTotalRoomCost);
    props.setTotalTax(props.userBooking.getTotalTax);
    props.setTotalPrice(props.userBooking.getTotalPrice);
  };

  return (
    <React.Fragment>
      <motion.div
        className={`relative w-[95%] flex flex-col rounded-md shadow-md px-3 py-3`}
      >
        <motion.div className={`relative flex flex-row justify-between mb-2`}>
          <motion.div className={`relative w-[92.5%]`}>
            <h2
              className={`text-md font-mono`}
            >{`${props.planInfo.room_Name}(${props.planInfo.plan_Name})`}</h2>
          </motion.div>
          <motion.div
            onClick={removeHotelPlan}
            className={`relative h-6 w-6 cursor-pointer rounded-full bg-slate-200 hover:bg-slate-400`}
          >
            <Image
              className={`rounded-lg p-1 h-2 w-2`}
              src={`/close.png`}
              alt="amenity-img"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className={`relative flex flex-row justify-between align-middle items-center`}
        >
          <motion.div
            className={`relative flex flex-row align-middle items-center`}
          >
            <motion.div className={``}>
              <p className={`text-lg text-gray-400 font-medium`}>Child</p>
            </motion.div>
            <motion.div className={`ml-4`}>
              <select
                className={`relative h-full px-3 py-2 border-2 border-blue-400 rounded-md`}
                onChange={updateChildToPlan}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </motion.div>
          </motion.div>
          <motion.div className={``}>
            <p className={`text-lg text-gray-400 font-medium`}>
              {props.planInfo.room_Count}&nbsp;
              {props.planInfo.room_Count === 1 ? "Room" : "Rooms"}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
