import React from "react";
import fetch from "node-fetch";
import { motion, motionValue } from "framer-motion";
import { useRouter } from "next/router";
import moment from "moment";
import { addDays, format } from "date-fns";
import BookingPriceCard from "./BookingPriceCard";
import { RoomDetails } from "@/classModels/bookings/roomDetails";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import Razorpay from "razorpay";
import { hotelBookingHandler } from "@/lib/booking/bookingHandler";
import { DateRangePicker } from "react-date-range";
import { UsersIcon } from "@heroicons/react/solid";
import Image from "next/image";

type Props = {
  userBooking: BookingDetails;
  setUserBooking: Function;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;

  roomSelectHandler: Function;
  hotelBookingHandler: Function;
};

export const makePayment = async (userBooking: BookingDetails) => {
  const userResponse = await fetch("/api/booking/createNewRazorpayOrder", {
    method: "POST",
    body: JSON.stringify({ userBooking: userBooking }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const stayflexiHandler = async (
  hotelId: any,
  fromDate: any,
  toDate: any
) => {
  const response = await fetch("/api/hotel/hotelPricePlanner", {
    method: "POST",
    body: JSON.stringify({ hotelId, fromDate, toDate }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("API Handler Function");
  console.log(data);
  return data;
};

export default function BookingCard(props: Props) {
  const router = useRouter();
  const [dateRangePicker, setDateRangePicker] = React.useState<boolean>(false);
  const [hotel_id, setHotelId] = React.useState<String>("");
  const [checkin, setCheckin] = React.useState<Date>(new Date());
  const [checkout, setCheckout] = React.useState<Date>(addDays(new Date(), 1));
  const [num_nights, setNum_nights] = React.useState<number>(1);
  const [num_guests, setNum_guests] = React.useState<number>(2);

  React.useEffect(() => {
    setHotelId(String(router.query.hotel_id));
    setNum_nights(Number(router.query.num_guests));
    setNum_guests(Number(router.query.num_guests));
    setCheckin(moment(router.query.checkin, "DD-MM-YYYY").toDate());
    setCheckout(
      addDays(
        moment(router.query.checkin, "DD-MM-YYYY").toDate(),
        Number(router.query.num_nights)
      )
    );
  }, [
    router.query.hotel_id,
    router.query.checkin,
    router.query.num_guests,
    router.query.num_nights,
  ]);

  const fetchStayFlexiHotelPrices = async () => {
    const fromDate = String(moment(checkin).format("DD-MM-YYYY"));
    const toDate = String(moment(checkout).format("DD-MM-YYYY"));
    const responseData = await stayflexiHandler(hotel_id, fromDate, toDate);
    console.log(responseData);
  };

  const formHanlder = async () => {
    resetSearchTextHandler();
    await props.roomSelectHandler();
    router.push("#bookinginformation");
  };

  const bookHotelHandler = async (event: any) => {
    props.hotelBookingHandler();
  };

  const dateSelectionRange = {
    startDate: checkin,
    endDate: checkout,
    key: "selection",
  };

  const dateRangeHandler = (selectedRange: any) => {
    setCheckin(selectedRange.selection.startDate);
    setCheckout(selectedRange.selection.endDate);
  };

  const guestNumberHandler = (action: number) => {
    if (action === 1) {
      if (num_guests <= 3) {
        setNum_guests(num_guests + 1);
      }
    } else {
      if (num_guests >= 3) {
        setNum_guests(num_guests - 1);
      }
    }
  };

  const resetSearchTextHandler = () => {
    setDateRangePicker(false);
    setHotelId(String(router.query.hotel_id));
    setNum_nights(Number(router.query.num_guests));
    setNum_guests(Number(router.query.num_guests));
    setCheckin(moment(router.query.checkin, "DD-MM-YYYY").toDate());
    setCheckout(
      addDays(
        moment(router.query.checkin, "DD-MM-YYYY").toDate(),
        Number(router.query.num_nights)
      )
    );
  };

  const hotelDetailsHandler = () => {
    setDateRangePicker(false);
    router.replace({
      pathname: `/hotel/google/list/${hotel_id}/`,
      query: {
        checkin: String(moment(checkin).format("DD-MM-YYYY")),
        num_nights: String(num_nights),
        num_guests: String(num_guests),
        hotel_id: String(hotel_id),
      },
    });
  };

  return (
    <React.Fragment>
      <motion.div
        id="booking-card"
        className={`sticky w-full md:w-[37.5%] h-full bg-white py-6 px-4 rounded-xl top-20 right-0 shadow-xl`}
      >
        <motion.div className={`w-full pb-4`}>
          <h1 className={`text-5xl font-semibold text-gray-500`}>
            ₹{props.userBooking.getTotalPrice.toFixed(2)}
          </h1>
        </motion.div>

        <motion.div
          className={`relative flex flex-col w-full mb-4 shadow-md bg-white rounded-2xl`}
        >
          {/* Date Range */}
          <motion.div
            onClick={() => {
              setDateRangePicker(true);
            }}
            className={`relative w-full flex justify-between border-red-950 border-[1px] rounded-t-lg cursor-pointer`}
          >
            <motion.div
              className={`relative flex flex-col w-[50%] px-4 py-2 border-r-[1px]  border-red-950 hover:bg-slate-100`}
            >
              <motion.div className={`text-xs font-semibold`}>
                CHECK-IN
              </motion.div>
              <motion.div className={`text-xl font-medium`}>
                {format(checkin, "dd MMMM yy")}
              </motion.div>
            </motion.div>
            <motion.div
              className={`relative flex flex-col w-[50%] px-4 py-2 hover:bg-slate-100`}
            >
              <motion.div className={`text-xs font-semibold`}>
                CHECK-OUT
              </motion.div>
              <motion.div className={`text-xl font-medium`}>
                {format(checkout, "dd MMMM yy")}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Number of Guests */}
          <motion.div
            onClick={() => {
              setDateRangePicker(true);
            }}
            className={`relative w-ful flex flex-col justify-between px-4 py-2 border-red-950 border-[1px] rounded-b-lg cursor-pointer hover:bg-slate-100`}
          >
            <motion.div className={`text-xs font-semibold`}>GUESTS</motion.div>
            <motion.div className={`text-xl font-medium`}>
              {num_guests} guests
            </motion.div>
          </motion.div>

          {/* Date Range Picker */}
          {dateRangePicker && (
            <motion.div
              className={`relative w-full align-middle flex flex-col align-center p-2 rounded-lg bg-white z-20 bottom-0 mt-1 border-red-950 border-[1px] overflow-x-scroll`}
              initial={{ opacity: 0.0 }}
              transition={{ duration: 4.0, type: "spring", stiffness: 200 }}
              whileInView={{ opacity: 1.0 }}
            >
              <Image
                onClick={resetSearchTextHandler}
                className={`absolute top-2 right-2  rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:bg-[#c4c2c2] z-40`}
                src={`/close.png`}
                alt="amenity-img"
                height={27.5}
                width={27.5}
              />
              <div className={`flex mx-auto`}>
                <DateRangePicker
                  ranges={[dateSelectionRange]}
                  minDate={new Date()}
                  rangeColors={["#cf8f24"]}
                  onChange={dateRangeHandler}
                  className={`relative w-full`}
                />
              </div>
              <div className={`flex flex-row flex-between pt-2 border-b-2`}>
                <h2 className={`text-xl font-semibold flex-grow`}>
                  Number of Guests
                </h2>
                <div
                  className={`flex items-center align-middle justify-center`}
                >
                  <div
                    className={`p-[6px] bg-gray-300 rounded-full mr-3 cursor-pointer`}
                    onClick={() => guestNumberHandler(-1)}
                  >
                    <Image
                      alt="icon"
                      src={`/minus-icon.png`}
                      width={"10"}
                      height={"10"}
                    />
                  </div>
                  <UsersIcon className={`h-6`} />
                  <input
                    aria-label="Search"
                    onChange={(e) => {}}
                    type="number"
                    value={num_guests}
                    min={2}
                    max={4}
                    className={`w-8 text-lg ml-2 text-right outline-none text-[#cf8f24]`}
                  />
                  <div
                    className={`p-[6px] bg-gray-300 rounded-full ml-3 cursor-pointer`}
                    onClick={() => guestNumberHandler(1)}
                  >
                    <Image
                      alt="icon"
                      src={`/plus-icon.png`}
                      width={"10"}
                      height={"10"}
                    />
                  </div>
                </div>
              </div>
              <div className={`flex pt-2`}>
                <button
                  className={`flex-grow text-gray-500 hover:bg-slate-200 py-1 rounded-md`}
                  onClick={resetSearchTextHandler}
                >
                  Cancel
                </button>
                <button
                  className={`flex-grow text-[#cf8f24] hover:bg-slate-200 py-1 rounded-md`}
                  onClick={hotelDetailsHandler}
                >
                  Search
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div className={`w-full rounded-lg px-1 mb-2`}>
          <p className={`text-xl font-sans`}>
            {props.userBooking.getTotalRoomCount} rooms
          </p>
        </motion.div>

        {props.userBooking.roomsList.length > 0 && (
          <motion.div
            className={`relative w-full flex flex-col items-center align-middle my-3 overflow-y-scroll h-36 py-2 shadow-md space-y-2`}
          >
            {props.userBooking.roomsList.map((planInfo: any, index: number) => (
              <BookingPriceCard
                key={index}
                planIndex={index}
                planInfo={planInfo}
                userBooking={props.userBooking}
                setRoomCount={props.setRoomCount}
                setTotalRoomCost={props.setTotalRoomCost}
                setTotalTax={props.setTotalTax}
                setTotalPrice={props.setTotalPrice}
              />
            ))}
          </motion.div>
        )}
        <motion.div
          className={`relative w-full flex flex-col align-middle items-center justify-between rounded-lg py-2 px-2 bg-white mt-2 mb-6 shadow-lg`}
        >
          <motion.div
            className={`w-full relative flex flex-row align-middle items-center justify-between pb-1`}
          >
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              Room Price
            </motion.div>
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              ₹{props.userBooking.getTotalRoomCost.toFixed(2)}
            </motion.div>
          </motion.div>
          <motion.div
            className={`w-full relative flex flex-row align-middle items-center justify-between pb-1`}
          >
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              Tax
            </motion.div>
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              ₹{props.userBooking.getTotalTax.toFixed(2)}
            </motion.div>
          </motion.div>
          <motion.div className={`w-full border-2`}></motion.div>
          <motion.div
            className={`w-full relative flex flex-row align-middle items-center justify-between pt-1`}
          >
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              Total Cost
            </motion.div>
            <motion.div className={`text-gray-700 font-medium font-sans`}>
              ₹{props.userBooking.getTotalPrice.toFixed(2)}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`w-full text-center text-lg font-semibold bg-[#cf8f24] rounded-lg hover:bg-red-500 text-white py-4 cursor-pointer`}
          onClick={formHanlder}
        >
          {`I'll reserve`}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
