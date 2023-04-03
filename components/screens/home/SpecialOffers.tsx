import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function SpeacialOffers(props: Props) {
  return (
    <React.Fragment>
      <motion.div
        className={`relative flex flex-col items-center justify-center align-middle w-screen h-screen mb-16`}
      >
        <motion.div
          className={`flex justify-center items-center align-middle pb-6`}
        >
          <motion.h1
            initial={{ opacity: 0.0, y: 30 }}
            transition={{ duration: 2.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl sm:text-7xl md:text-8xl text-center pb-5`}
          >
            Special Offers
          </motion.h1>
        </motion.div>
        <div
          className={`relative flex items-center justify-center align-middle w-[90%] h-[90%] rounded-full px-4`}
        >
          <Image
            src={`/specialOffers-background.png`}
            alt="icon"
            layout="fill"
            // objectFit="contain"
            objectPosition="center"
            className={`rounded-3xl drop-shadow-xl`}
          />
          <div
            className={`absolute flex flex-col items-center justify-evenly w-[90%] h-[70%] md:w-[80%] md:h-[60%] lg:w-[65%] lg:h-[45%] bg-slate-100 rounded-[50px] opacity-90`}
          >
            <div>
              <motion.h2
                initial={{ opacity: 0.0, y: 30 }}
                transition={{ duration: 2.0, type: "spring" }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`text-4xl text-center`}
              >
                Get Best Price GUARANTEED!
              </motion.h2>
            </div>
            <div className="flex flex-col align-middle items-center text-center px-4">
              <motion.p
                initial={{ opacity: 0.0, y: 40 }}
                transition={{ duration: 3.0, type: "spring" }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`text-center text-[20px]`}
              >
                We can help you fit your stay and experience within your alloted
                budget.
              </motion.p>
              <div className={`p-2`}>
                <Link href={`/contact`}>
                  <motion.p
                    initial={{ opacity: 0.0, y: 50 }}
                    transition={{ duration: 3.0, type: "spring" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={`text-4xl text-center cursor-pointer text-red-500 hover:text-red-700`}
                  >
                    Contact Us
                  </motion.p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
