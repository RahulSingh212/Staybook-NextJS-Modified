import React from "react";
import { motion, motionValue } from "framer-motion";

import RoomInfo from "./RoomInfo";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";

// type Props = {
//   roomsList: any[];
//   selectedRoomsList: any[];
//   setSelectedRoomsList: Function;
//   hotel_firebase_Unique_Id:String;

//   roomCount: number;
//   totalRoomCost: number;
//   totalTax: number;
//   totalPrice: number;
//   setRoomCount: Function;
//   setTotalRoomCost: Function;
//   setTotalTax: Function;
//   setTotalPrice: Function;
// };

type Props = {
  roomsList: any[];
  userBooking: BookingDetails;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;
};

export default function RoomsCard(props: Props) {
  return (
    <React.Fragment>
      <motion.div className={`relative w-full flex flex-col mb-4`}>
        <motion.div className={`relative w-full align-middle items-center`}>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl text-center font-serif mb-4`}
          >
            Choose your room(s)
          </h1>
        </motion.div>

        <motion.div className={`relative w-full flex flex-col space-y-6`}>
          {props.roomsList.map((room: any, index: number) => (
            <RoomInfo
              key={room._key}
              roomInfo={room}
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
