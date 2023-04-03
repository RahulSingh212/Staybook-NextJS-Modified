import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function ToursAndTravels(props: Props) {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0.0, y: 35 }}
        transition={{ duration: 2.0, type: "spring" }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`relative flex flex-col w-screen top-0 items-center justify-center mb-16`}
      >
        <div className={`relative w-[90%] h-[400px] md:h-[450px] lg:h-[550px] rounded-b-full`}>
          <Image
            src={"/background.jpg"}
            alt="tours and travels"
            layout="fill"
            objectPosition="center"
            className={`relative rounded-b-[180px] bg-red-500 h-fit`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 30 }}
          transition={{ duration: 2.0, type: "spring" }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative w-[90%] flex items-center justify-center align-middle text-center py-2 md:py-4`}
        >
          <h1 className={`text-5xl sm:text-7xl md:text-8xl`}>
            Tours and Travels
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 30 }}
          transition={{ duration: 2.0, type: "spring" }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative w-[90%] flex items-center justify-center align-middle text-center text-red-500 text-2xl py-4`}
        >
          Staybook offers customised family trips tailored to the needs of any
          family, large or small, with youngsters or the elderly. It is a
          fantastic chance to spend quality time together in a fantastic
          location.
        </motion.div>
        <Link href={`/packages`}>
          <motion.div
            initial={{ opacity: 0.0, y: 30 }}
            transition={{ duration: 2.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`relative flex items-center justify-center align-middle text-center border-2 rounded-lg px-16 py-5 border-red-500 hover:bg-red-500 cursor-pointer`}
          >
            Find More
          </motion.div>
        </Link>
      </motion.div>
    </React.Fragment>
  );
}
