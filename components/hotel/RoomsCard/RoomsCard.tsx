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

import RoomInfo from "./RoomInfo";

type Props = {
  roomsList: any[];
};

export default function RoomsCard(props: Props) {
  return (
    <React.Fragment>
      <motion.div className={`relative w-full flex flex-col mb-4`}>
        <motion.div
          className={`relative w-full align-middle items-center`}
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl text-center font-serif mb-4`}
          >
            Choose your room(s)
          </h1>
        </motion.div>

        <motion.div className={`relative w-full flex flex-col space-y-6`}>
          {props.roomsList.map((room: any, index: number) => (
            <RoomInfo key={room._key} roomInfo={room} />
          ))}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
