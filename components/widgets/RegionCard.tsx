import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { groq } from "next-sanity";
import { sanityClient, urlFor } from "@/sanity";

type Props = {
  hotelRegion: any;
};

export default function RegionCard(props: Props) {
  return (
    <React.Fragment>
      <motion.div
        className={`relative w-[98%] h-[400px] md:w-[600px] md:h-[450px] flex-shrink-0 flex flex-col items-center align-middle p-4 rounded-3xl bg-red-100 hover:bg-gray-200 cursor-pointer`}
      >
        <motion.div className={`relative w-full h-full mb-8`}>
          <Image
            src={urlFor(props.hotelRegion.image_Url).url()}
            alt="icon"
            layout="fill"
            // objectFit="contain"
            objectPosition="center"
            className={`rounded-3xl hover:drop-shadow-xl shadow-lg w-fit h-fill`}
          />
        </motion.div>
        <motion.div>
          <h2 className={`text-center text-2xl text-red-500`}>
            {props.hotelRegion.name}
          </h2>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
