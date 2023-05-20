import React from "react";
import { motion, motionValue } from "framer-motion";
import { useRouter } from "next/router";
import moment from "moment";
import { addDays, format } from "date-fns";
import BookingPriceCard from "./BookingPriceCard";
import { RoomDetails } from "@/classModels/bookings/roomDetails";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";

type Props = {
  userBooking: BookingDetails;
  checkin: any;
  checkout: any;
};

export const MobileBookingCard = (props: Props) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <motion.div
        className={`fixed bottom-0 w-full flex flex-row justify-between align-middle items-center px-4 py-5 rounded-t-3xl border-[1px] border-[#6d6d6d] bg-[#fff] md:hidden z-20 scrollbar-hide`}
      >
        <div>
          <motion.div
            className={`relative w-fit text-transparent bg-clip-text flex flex-row items-end text-gradient-to-r text-2xl font-mono font-bold bg-gradient-to-r from-[#1999a8] to-[#1caf95]`}
          >
            ₹{props.userBooking.getTotalPrice.toFixed(2)}
            <p className={`text-black text-sm font-light`}>
              &nbsp;{props.userBooking.total_Price != 0 ? " nights" : ""}
            </p>
          </motion.div>
          <motion.div className={`relative w-full flex mb-2 underline text-sm`}>
            {format(moment(props.checkin).toDate(), "dd MMMM yy")} -{" "}
            {format(moment(props.checkout).toDate(), "dd MMMM yy")}
          </motion.div>
        </div>
        <motion.div
          onClick={() => {
            router.push("#booking-card");
          }}
          className={`relative w-fit bg-gray-400 py-3 px-5 rounded-md text-center bg-gradient-to-r from-[#1999a8] to-[#1caf95] text-white cursor-pointer`}
        >
          Reserve
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};
