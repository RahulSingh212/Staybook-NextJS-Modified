import React from "react";
import { motion, motionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  PlayIcon,
  PauseIcon,
  ZoomInIcon,
} from "@heroicons/react/solid";

type Props = {
  roomInfo: any;
  roomAmenitiesList: any[];
  roomModalHandler: any;
  openFullScreen: any;
};

export default function InfoCard(props: Props) {
  const [play, setPlay] = React.useState<boolean>(false);
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        const newIdx = (imageIndex + Number(1)) % props.roomInfo.image_List.length;
        setImageIndex(newIdx);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [imageIndex, play, props.roomInfo.image_List.length]);

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
    <React.Fragment>
      <AnimatePresence mode="wait">
        <motion.div
          className={`fixed flex flex-col justify-center align-middle items-center left-0 top-0 w-screen h-screen z-30 bg-black`}
        >
          <motion.div
            className={`relative flex flex-col overflow-y-scroll w-[95%] h-[80%] md:w-[75%] xl:w-[65%] p-4 bg-[#fff] rounded-2xl border-[1px] border-[#cf8f24] no-scrollbar`}
            initial={{ opacity: 0.25 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              onClick={props.roomModalHandler}
              className={`absolute top-2 right-2  rounded-full p-1 border-[1px] cursor-pointer hover:bg-[#c4c2c2] z-40`}
              src={`/close.png`}
              alt="amenity-img"
              height={27.5}
              width={27.5}
            />
            <motion.div
              className={`relative flex flex-col md:flex-row w-full h-full no-scrollbar`}
            >
              <motion.div
                className={`relative w-full md:w-[50%] flex flex-col px-1 mb-4 md:mb-0`}
              >
                <div
                  className={`relative flex justify-center align-middle items-center w-full h-72 sm:h-[80] md:h-[55%] rounded-lg`}
                >
                  <ArrowSmLeftIcon
                    onClick={previousImageHandler}
                    className={`absolute left-2 h-8 w-8 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
                  />
                  <ArrowSmRightIcon
                    onClick={nextImageHandler}
                    className={`absolute right-2 h-8 w-8 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
                  />
                  {!play && <PlayIcon
                    onClick={() => {
                      setPlay(true);
                    }}
                    className={`absolute bottom-2 left-2 h-8 w-8 rounded-full cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
                  />}
                  {play && <PauseIcon
                    onClick={() => {
                      setPlay(false);
                    }}
                    className={`absolute bottom-2 left-2 h-8 w-8 rounded-full cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
                  />}
                  <ZoomInIcon
                    onClick={props.openFullScreen}
                    className={`absolute bottom-2 right-2 h-8 w-8 rounded-full cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
                  />
                  <Image
                    className={`rounded-lg border-[1px] border-[#cf8f24]`}
                    src={props.roomInfo.image_List[imageIndex]}
                    alt="hotel-img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`relative flex align-middle justify-center items-center my-2 w-full h-16 px-2 space-x-2 no-scrollbar`}
                >
                  {props.roomInfo.image_List.map(
                    (imgUrl: string, index: number) => (
                      <div key={index} className={`h-full w-20`}>
                        <Image
                          onClick={() => {
                            setImageIndex(index);
                          }}
                          className={`cursor-pointer shadow-lg ${
                            index === imageIndex
                              ? "border-4 border-blue-700"
                              : ""
                          }`}
                          src={imgUrl}
                          alt="h-img"
                          layout="responsive"
                          objectFit="cover"
                          height={10}
                          width={10}
                        />
                      </div>
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
                className={`relative flex flex-col w-full h-full md:w-[50%] px-1`}
              >
                <motion.div
                  className={`relative w-full align-top items-center`}
                >
                  <h2
                    className={`font-sans font-medium text-lg sm:text-2xl text-gray-500 text-center`}
                  >
                    What we offer
                  </h2>
                </motion.div>
                <div className={`overflow-x-auto no-scrollbar`}>
                  <motion.div
                    className={`grid grid-cols-2 overflow-x-auto no-scrollbar`}
                  >
                    {props.roomAmenitiesList.map((amenity, index) => (
                      <div
                        key={index}
                        className={`relative align-middle items-center space-x-1 flex mb-1 mr-2`}
                      >
                        <div>
                          <Image
                            className={`w-3 h-3`}
                            alt="available"
                            src={`/correct.png`}
                            height={5}
                            width={5}
                          />
                        </div>
                        <span className={`relative w-full whitespace-wrap`}>
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
}
