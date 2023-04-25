import React from "react";
import { motion, motionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import classes from "./LoadingModel.module.scss";

type Props = {
  modelVisible: boolean;
  setLoadingModel: Function;
};

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1,
        ease: "easeOut",
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

export default function LoadingModel(props: Props) {
  return (
    <AnimatePresence mode="wait">
      {props.modelVisible && (
        <motion.div
          className={classes.backdrop}
          variants={backdropVariant}
          initial={`hidden`}
          animate={`visible`}
        >
          <motion.div
            className={`relative flex flex-col align-middle items-center justify-center w-56 h-56 p-5 bg-red-100 rounded-full`}
            initial={{ opacity: 0.5}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 2 }}
          >
            <motion.div className={`relative flex w-full h-full`}>
              <Image
                src={`/logo.png`}
                alt="icon"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                className={`rounded-full`}
              />
            </motion.div>
          </motion.div>

          {/* <motion.div className={`absolute w-52 h-4`}>
            <motion.div
              className={`relative bg-red-500 h-3 w-3 rounded-full mt-16`}
              animate={{ x: 200 }}
              initial={{ x: -100 }}
              exit={{ x: 200 }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            />
          </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
