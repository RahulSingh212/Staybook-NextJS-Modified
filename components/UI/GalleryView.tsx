import React from "react";
import { motion, motionValue } from "framer-motion";
import Image from "next/image";
import classes from "./GalleryView.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

type Props = {
  hotelImgList: any[];
  closeGalleryView: any;
};

export default function GalleryView(props: Props) {
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const changeImageHandler = (shifter: number) => {
    if (shifter === 1) {
      setImageIndex((imageIndex + 1) % props.hotelImgList.length);
    } else {
      if (imageIndex === 0) {
        setImageIndex(props.hotelImgList.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.closeGalleryView} />
      <motion.div
        className={`fixed h-[80%] sm:h-[80%] w-[100%] bg-slate-50 rounded-3xl z-30`}
      >
        <motion.div
          className={`relative flex flex-col justify-between w-full h-full py-3`}
        >
          <motion.div className={`flex justify-end px-3`}>
            <motion.div
              onClick={props.closeGalleryView}
              className={`relative h-8 w-8 rounded-full cursor-pointer bg-white border-2 border-gray-400 hover:bg-slate-400`}
            >
              <Image
                className={`rounded-full p-2`}
                src={`/close.png`}
                alt="hotel-img"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className={`h-full flex flex-row items-center align-middle justify-between px-2 sm:px-4`}
          >
            <div
              className={`cursor-pointer hover:bg-slate-200 rounded-full opacity-90 shadow-md hover:shadow-lg`}
              onClick={changeImageHandler.bind(null, -1)}
            >
              <ArrowLeftIcon
                className={`fillblack0 h-10 w-10 sm:h-12 sm:w-12 md:h-20 md:w-20 p-2 rounded-full`}
              />
            </div>
            <motion.div
              className={`relative w-[80%] md:w-[70%] lg:w-[60%] h-full`}
            >
              <Image
                className={`rounded-lg`}
                src={props.hotelImgList[imageIndex]}
                alt="hotel-img"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <div
              className={`cursor-pointer hover:bg-slate-200 rounded-full opacity-90 shadow-md hover:shadow-lg`}
              onClick={changeImageHandler.bind(null, 1)}
            >
              <ArrowRightIcon
                className={`fill-black h-10 w-10 sm:h-12 sm:w-12 md:h-20 md:w-20 p-1 rounded-full`}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
