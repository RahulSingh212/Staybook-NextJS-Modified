import React from "react";
import { motion, motionValue } from "framer-motion";
import Image from "next/image";

type Props = {
  roomInfo: any;
  roomAmenitiesList: any[];
  userBooking: BookingDetails;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;
};

import PlanCard from "./PlanCard";
import { RoomDetails } from "@/classModels/bookings/roomDetails";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import InfoCard from "./InfoCard";
import { FullScreenImageView } from "./FullScreenImageView";

export default function RoomInfo(props: Props) {
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false);
  const [roomDetails, setRoomDetails] = React.useState<boolean>(false);

  const roomInfoHandler = () => {
    setRoomDetails(!roomDetails);
  };

  const openFullScreen = () => {
    setRoomDetails(false);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    setRoomDetails(true);
  };

  return (
    <React.Fragment>
      {isFullScreen && (
        <FullScreenImageView
          imageList={props.roomInfo.image_List}
          onClose={closeFullScreen}
        />
      )}
      {roomDetails && (
        <InfoCard
          roomInfo={props.roomInfo}
          roomAmenitiesList={props.roomAmenitiesList}
          roomModalHandler={roomInfoHandler}
          openFullScreen={openFullScreen}
        />
      )}
      <motion.div
        className={`relative w-full flex flex-col p-4 rounded-lg border-[1px] border-red-500`}
      >
        <motion.div
          className={`relative w-full flex flex-col-reverse md:flex-row justify-between mb-6`}
        >
          <motion.div
            className={`relative w-full md:w-[45%] h-full flex flex-col justify-between pr-2`}
          >
            <div>
              <motion.div className={`relative w-full mb-2`}>
                <h2
                  className={`font-sans font-medium text-lg sm:text-2xl text-gray-500`}
                >
                  {props.roomInfo.type}
                </h2>
              </motion.div>
              <motion.div className={`relative w-full mb-4`}>
                <h2
                  className={`font-sans font-light text-md sm:text-xl text-gray-500`}
                >
                  {props.roomInfo.info}
                </h2>
              </motion.div>
            </div>
            <motion.div
              onClick={roomInfoHandler}
              className={`relative w-fit bg-[#cf8f24] hover:bg-red-500 py-1 px-3 cursor-pointer rounded-lg align-middle items-center`}
            >
              <p className={`text-white text-lg font-light text-center`}>
                More Info
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className={`relative w-full md:w-[55%] h-56 sm:h-72 md:h-64 xl:h-60 shadow-lg hover:shadow-xl rounded-xl cursor-pointer`}
          >
            <Image
              className={`rounded-lg`}
              src={props.roomInfo.image_List[0]}
              alt="amenity-img"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>

        <motion.div className={`relative w-full flex flex-col space-y-4`}>
          {props.roomInfo.plans.map((plan: any, index: number) => (
            <PlanCard
              key={plan._key}
              planInfo={plan}
              roomName={props.roomInfo.type}
              roomInfo={props.roomInfo.info}
              userBooking={props.userBooking}
              setRoomCount={props.setRoomCount}
              setTotalRoomCost={props.setTotalRoomCost}
              setTotalTax={props.setTotalTax}
              setTotalPrice={props.setTotalPrice}
            />
          ))}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
