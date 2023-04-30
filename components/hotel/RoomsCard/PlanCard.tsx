import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";

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

type Props = {
  planInfo: any;
  selectedRoomsList: any[];
  setSelectedRoomsList: Function;

  hotel_firebase_Unique_Id: String;
  hotel_Room_Type: String;

  roomCount: number;
  totalRoomCost: number;
  totalTax: number;
  totalPrice: number;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;
};

export default function PlanCard(props: Props) {
  const router = useRouter();
  const [num_child, setNumChild] = React.useState<number>(0);
  const [num_infants, setNumInfants] = React.useState<number>(0);

  const roomPlanHandler = () => {
    let list = props.selectedRoomsList;
    list.push({
      "hotel_firebase_Unique_Id": props.hotel_firebase_Unique_Id,
      "hotel_Sanity_Id": `${router.query.hotel_id}`,
      "room_Id": "",
      "room_Name": "",
      "room_Info": "",
      "plan_Id": "",
      "plan_Nmae": `${props.hotel_Room_Type}(${props.planInfo.title})`,
      "plan_Price": `${props.planInfo.price}`,
      "num_guests": `${router.query.num_guests}`,
      "num_children": `${num_child}`,
      "num_infants": `${num_infants}`,
    });
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += Number(list[i].plan_Price);
      total += Number(list[i].num_children)*1000;
    }
    
    props.setRoomCount(props.roomCount+1);
    props.setTotalRoomCost(total);
    props.setTotalTax(total*0.12);
    props.setTotalPrice(total*1.12);
    props.setSelectedRoomsList(list);
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
