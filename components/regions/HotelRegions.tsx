import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { groq } from "next-sanity";
import { sanityClient, urlFor } from "@/sanity";
import RegionCard from "../widgets/RegionCard";

type Props = {
  hotelRegionsList: any[];
};

const boxVariant = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, translateX: "15" },
};

export default function HotelRegions(props: Props) {
  const [hotelRegionIdx, setHotelRegionIdx] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newIdx =
        (hotelRegionIdx + Number(1)) % props.hotelRegionsList.length;
      setHotelRegionIdx(newIdx);
    }, 5000);

    return () => clearInterval(interval);
  }, [hotelRegionIdx, props.hotelRegionsList.length]);

  const selectHotelRegionCardHandler = (selectedIndex: number) => {
    setHotelRegionIdx(selectedIndex);
  };

  return (
    <React.Fragment>
      <motion.div
        className={`relative flex flex-col justify-evenly items-center align-middle mx-w-full mb-16`}
      >
        <motion.div
          className={`flex flex-col justify-center items-center align-middle pb-4`}
        >
          <motion.h1
            initial={{ opacity: 0.0, y: 30 }}
            transition={{ duration: 2.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl sm:text-7xl md:text-8xl text-center px-5`}
          >
            Hotel Regions
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 30 }}
          transition={{ duration: 2.0, type: "spring" }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative w-[90%] flex space-x-8 overflow-x-scroll my-2 scrollbar-hide`}
        >
          {props.hotelRegionsList.map((hr) => (
            <RegionCard key={hr._id} hotelRegion={hr} />
          ))}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
