import React from "react";
import { motion, motionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/solid";

type Props = {
  roomInfo: any;
  roomAmenitiesList: any[];
  roomModalHandler: any;
};

export default function InfoCard(props: Props) {
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const previousImageHandler = (event: any) => {
    event.stopPropagation();
    if (imageIndex === 0) {
      setImageIndex(props.roomInfo.image_List.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const nextImageHandler = (event: any) => {
    event.stopPropagation();
    setImageIndex((imageIndex + 1) % props.roomInfo.image_List.length);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`fixed flex flex-col justify-center align-middle items-center left-0 top-0 w-screen h-screen z-30 bg-black`}
      >
        <motion.div
          className={`relative flex flex-col w-[95%] h-[80%] md:w-[75%] xl:w-[65%] p-4 bg-[#fff] rounded-2xl overflow-y-scroll border-[1px] border-[#cf8f24] mt-16`}
          initial={{ opacity: 0.25 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image
            onClick={props.roomModalHandler}
            className={`absolute top-3 right-3  rounded-full p-1 border-[1px] cursor-pointer hover:bg-[#c4c2c2] z-40`}
            src={`/close.png`}
            alt="amenity-img"
            height={27.5}
            width={27.5}
          />
          <motion.div
            className={`relative flex flex-col md:flex-row w-full h-full`}
          >
            <motion.div
              className={`relative w-full md:w-[50%] flex flex-col px-1 mb-4 md:mb-0`}
            >
              <div
                className={`relative w-full h-72 sm:h-[80] md:h-[55%] rounded-lg`}
              >
                <motion.div
                  initial={{ opacity: 0.5 }}
                  transition={{ duration: 1.0, type: "spring" }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute flex flex-row items-center align-middle h-full justify-between w-full z-20 px-2`}
                >
                  <div
                    className={`cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30`}
                    onClick={previousImageHandler}
                  >
                    <ArrowSmLeftIcon
                      className={`fill-black h-8 w-8 p-1 rounded-full`}
                    />
                  </div>
                  <div
                    className={`cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30`}
                    onClick={nextImageHandler}
                  >
                    <ArrowSmRightIcon
                      className={`fill-black h-8 w-8 p-1 rounded-full`}
                    />
                  </div>
                </motion.div>
                <Image
                  className={`rounded-lg border-[1px] border-[#cf8f24]`}
                  src={props.roomInfo.image_List[imageIndex]}
                  alt="hotel-img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                className={`relative flex align-middle justify-center items-center my-2 w-full h-16 px-2 space-x-2 overflow-x-scroll scrollbar-hide`}
              >
                {props.roomInfo.image_List.map(
                  (imgUrl: string, index: number) => (
                    <Image
                      onClick={() => {
                        setImageIndex(index);
                      }}
                      key={index}
                      className={`h-full w-20 cursor-pointer shadow-lg ${
                        index === imageIndex ? "border-4 border-blue-700" : ""
                      }`}
                      src={imgUrl}
                      height={12}
                      width={16}
                      alt="h-img"
                    />
                  )
                )}
              </div>
              <motion.div className={`relative w-full mt-4`}>
                <h2
                  className={`font-sans font-medium text-lg sm:text-2xl text-gray-500`}
                >
                  {props.roomInfo.type}
                </h2>
              </motion.div>
              <motion.div className={`relative w-full`}>
                <h2
                  className={`font-sans font-light text-md sm:text-xl text-gray-500`}
                >
                  {props.roomInfo.info}
                </h2>
              </motion.div>
            </motion.div>
            <motion.div
              className={`relative w-full md:w-[50%] flex flex-col overflow-x-scroll px-1`}
            >
              {/* <motion.div
                className={`relative flex w-full flex-row-reverse mb-3`}
              >
                <Image
                  onClick={props.roomModalHandler}
                  className={`rounded-full p-1 border-[1px] cursor-pointer hover:bg-[#c4c2c2]`}
                  src={`/close.png`}
                  alt="amenity-img"
                  height={27.5}
                  width={27.5}
                />
              </motion.div> */}
              <motion.div className={`relative w-full mt-4`}>
                <h2
                  className={`font-sans font-medium text-lg sm:text-2xl text-gray-500 text-center`}
                >
                  What we offer
                </h2>
              </motion.div>
              <motion.div
                className={`relative w-full grid grid-rows-6 space-y-2 space-x-3`}
              >
                {props.roomAmenitiesList.map((amenity: any, index: number) => (
                  <div key={index} className={``}>
                    {amenity}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      )
    </AnimatePresence>
  );
}
