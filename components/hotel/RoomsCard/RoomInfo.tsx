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
  roomInfo: any;
};

import PlanCard from "./PlanCard";

export default function RoomInfo(props: Props) {
  return (
    <React.Fragment>
      <motion.div
        className={`relative w-full flex flex-col p-4 rounded-lg border-[1px] border-red-500`}
      >
        <motion.div
          className={`relative w-full flex flex-col-reverse md:flex-row justify-between mb-6`}
        >
          <motion.div
            className={`relative w-full md:w-[45%] h-full flex flex-col justify-between pr-2`}
          >
            <div>
              <motion.div className={`relative w-full mb-2`}>
                <h2
                  className={`font-sans font-medium text-lg sm:text-2xl text-gray-500`}
                >
                  {props.roomInfo.type}
                </h2>
              </motion.div>
              <motion.div className={`relative w-full mb-4`}>
                <h2
                  className={`font-sans font-light text-md sm:text-xl text-gray-500`}
                >
                  {props.roomInfo.info}
                </h2>
              </motion.div>
            </div>
            <motion.div
              className={`relative w-fit bg-red-700 hover:bg-red-600 py-1 px-3 cursor-pointer rounded-lg align-middle items-center`}
            >
              <p className={`text-white text-lg font-light text-center`}>
                More Info
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className={`relative w-full md:w-[55%] h-56 sm:h-72 md:h-64 xl:h-60 shadow-lg hover:shadow-xl rounded-xl cursor-pointer`}
          >
            <Image
              className={`rounded-lg`}
              src={props.roomInfo.image_List[0]}
              alt="amenity-img"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>

        <motion.div className={`relative w-full flex flex-col space-y-4`}>
          {props.roomInfo.plans.map((plan: any, index: number) => (
            <PlanCard key={plan._key} planInfo={plan} />
          ))}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
