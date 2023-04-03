import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function ContactUs(props: Props) {
  return (
    <React.Fragment>
      <motion.div
        className={`relative flex flex-col items-center justify-center align-middle w-screen mb-16`}
      >
        <motion.div
          className={`flex flex-col justify-center items-center align-middle`}
        >
          <motion.h1
            initial={{ opacity: 0.0, y: 30 }}
            transition={{ duration: 2.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl sm:text-7xl md:text-8xl text-center `}
          >
            Contact Us
          </motion.h1>
        </motion.div>
        <motion.div className={`flex flex-col py-8`}>
          <motion.p
            initial={{ opacity: 0.0, y: 40 }}
            transition={{ duration: 3.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-center text-[20px] text-red-500`}
          >
            Could not find what you are looking for? We are here to help on our
            24/7 helplines.
          </motion.p>
        </motion.div>
        <motion.div
          className={`relative flex flex-row w-full space-x-2 overflow-x-scroll`}
        ></motion.div>
      </motion.div>
    </React.Fragment>
  );
}
