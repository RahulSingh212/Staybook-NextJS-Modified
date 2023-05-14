import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RoomDetails } from "@/classModels/bookings/roomDetails";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import { format } from "date-fns";
import moment from "moment";

type Props = {
  bookingInfo: BookingDetails;
};

export default function BookingTile(props: Props) {
  const dateFormatOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return (
    <React.Fragment>
      <motion.div
        // className={`relative flex flex-col md:flex-row w-full justify-between align-middle items-center px-4 py-6 rounded-md shadow-md`}
        className={`relative flex flex-col w-full sm:flex-row p-3 rounded-2xl bg-white shadow-lg`}
      >
        <motion.div
          initial={{ opacity: 0.0, x: -25 }}
          transition={{ duration: 3.0, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`relative flex flex-row h-72 w-[100%] sm:h-60 sm:w-[45%] md:h-60 md:w-[40%] lg:h-72 lg:w-96 xl:h-80 xl:w-[480px] flex-shrink-0 mr-2 md:mr-4 xl:mr-6`}
        >
          <Image
            className={`rounded-lg`}
            src={props.bookingInfo.hotel_Image_Url}
            alt="hotel-img"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, x: 25 }}
          transition={{ duration: 3.0, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`relative flex flex-col justify-between sm:pr-2 w-full sm:w-[55%] md:w-[60%] lg:w-[70%] xl:w-[75%]`}
        >
          <div className={`pb-4 pt-4 sm:pt-0`}>
            <div className={`flex flex-row flex-between`}>
              <h1
                className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold`}
              >
                {props.bookingInfo.hotel_Name}
              </h1>
            </div>
            {/* <div className={`py-1`}>
              <p className={`md:text-lg xl:text-xl`}>
                {props.bookingInfo.hotel_Landmark}
              </p>
            </div> */}
            <div className={`relative flex align-middle items-center mt-2`}>
              <h3 className={`text-xs font-medium underline text-gray-500`}>
                Booked on
              </h3>
              <div className={`text-md`}>
                :&nbsp;
                {format(
                  moment(props.bookingInfo.booking_Time).toDate(),
                  "dd MMMM yy"
                )}
                , &nbsp;
                {format(
                  moment(props.bookingInfo.booking_Time).toDate(),
                  "hh:mm a"
                )}
              </div>
            </div>
            <div className={`relative flex flex-row items-center text-center`}>
              <h3 className={`text-md font-medium text-gray-500`}>
                Check-In
              </h3>
              :&nbsp;
              <p className={`text-lg`}>
                {format(
                  moment(props.bookingInfo.checkin_Time).toDate(),
                  "dd MMMM yy"
                )}
              </p>
              &nbsp;-&nbsp;
              <h3 className={`text-md font-medium text-gray-500`}>
                Check-Out
              </h3>
              :&nbsp;
              <p className={`text-lg`}>
                {format(
                  moment(props.bookingInfo.checkout_Time).toDate(),
                  "dd MMMM yy"
                )}
              </p>
            </div>
          </div>
          {/* <motion.div className={`relative w-full flex flex-col sm:flex-row`}>

          </motion.div> */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center`}
          >
            <div className={`flex flex-col pb-4 sm:pb-0 justify-center`}>
              <p
                className={`text-[#cf8f24] text-3xl font-bold`}
              >{`₹ ${props.bookingInfo.total_Price}`}</p>
              <p className={`text-sm text-gray-500`}>{`inclusive all taxes (${props.bookingInfo.amount_Paid === 0 ? 'pay at hotel' : 'amont paid'})`}</p>
            </div>

            {/* <div
              className={`relative w-full sm:w-fit text-center px-4 py-2 rounded-lg bg-[#cf8f24] cursor-pointer hover:shadow-md`}
            >
              <p className={`text-gray-200 font-medium`}>View Details</p>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
