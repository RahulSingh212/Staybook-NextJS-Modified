import React from "react";
import { motion, motionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import classes from "./SuccessModal.module.scss";
import { useRouter } from "next/router";

type Props = {
  successMsg: string;
  successModelVisible: boolean;
  setSuccessModel: Function;
  setSuccessMessage: Function;
};

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function SuccessModel(props: Props) {
  const [buttonActive, setButtonActive] = React.useState<boolean>(true);
  const router = useRouter();

  const screenRedirector = () => {
    setButtonActive(false);
    props.setSuccessMessage("");
    router.push({
      pathname: `/`,
      //   query: {
      //     checkin: String(moment(props.checkin).format("DD-MM-YYYY")),
      //     num_nights: String(props.num_nights),
      //     num_guests: String(props.num_guests),
      //     hotel_id: String(props.hotel_Id),
      //   },
    });
  };

  return (
    <AnimatePresence mode="wait">
      {props.successModelVisible && (
        <motion.div className={classes.backdrop}>
          <motion.div
            className={`relative flex flex-col align-middle items-center justify-evenly w-[90%] h-[50%] sm:w-[65%] md:w-[60%] md:h-[50%] lg:w-[50%] lg:h-[40%] xl:w-[40%] p-3 bg-red-100 rounded-3xl`}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div className={`relative w-full px-2`}>
              <h2 className={`text-center font-semibold text-3xl`}>
                {props.successMsg}
              </h2>
            </motion.div>
            <motion.div
              className={`relative w-full flex align-middle items-center justify-center`}
            >
              <p className={`text-center`}>
                You will be redirected to home screen
              </p>
            </motion.div>
            {buttonActive && (
              <motion.div
                className={`relative rounded-full px-10 py-3 text-white bg-red-500 text-2xl font-semibold cursor-pointer`}
                onClick={screenRedirector}
              >
                Okay!
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
