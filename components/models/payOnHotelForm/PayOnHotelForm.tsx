import React from "react";
import { motion, motionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";

import classes from "./PayOnHotelForm.module.scss";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Textarea, theme } from "@nextui-org/react";
import { hotelBookingHandler } from "@/lib/booking/bookingHandler";

type Props = {
  userBooking: BookingDetails;
  formVisibility: boolean;
  setFormVisibility: Function;

  setSuccessModel: Function;
  setSuccessMessage: Function;

  setErrorMessage: Function;
  setErrorModel: Function;

  setLoadingModel: Function;
};

export default function PayOnHotelForm(props: Props) {
  const [userFullName, setUserFullName] = React.useState<string>(
    props.userBooking.user_Name
  );
  const [userMobileNumber, setUserMobileNumber] = React.useState<string>(
    props.userBooking.user_Phone_Number
  );
  const [userEmailId, setUserEmailId] = React.useState<string>(
    props.userBooking.user_Email_Id
  );
  const [userAddress, setUserAddress] = React.useState<string>("");

  const closeFormHandler = () => {
    props.setFormVisibility(false);
  };

  const bookHotelHandler = async (event: any) => {
    props.setFormVisibility(false);
    props.setLoadingModel(true);
    props.userBooking.user_Name = userFullName;
    props.userBooking.user_Phone_Number = userMobileNumber;
    props.userBooking.user_Email_Id = userEmailId;
    const data = await hotelBookingHandler(props.userBooking);
    props.setLoadingModel(false);
    props.setSuccessMessage("You hotel has been successfully booked.");
    props.setSuccessModel(true);
  };

  console.log(props.userBooking);

  return (
    <React.Fragment>
      {props.formVisibility && (
        <motion.div className={classes.backdrop}>
          <div
            className={`relative flex align-middle items-center flex-col w-[90%] sm-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] py-4 px-3 sm:px-6 bg-orange-100 rounded-lg overflow-y-scroll`}
          >
            <motion.div className={`relative flex w-full justify-end`}>
              <motion.div
                onClick={closeFormHandler}
                className={`relative h-8 w-8 rounded-full cursor-pointer bg-white hover:bg-slate-300`}
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
              className={`relative flex align-middle justify-center items-center mb-5`}
            >
              <h1 className={`font-semibold text-3xl font-serif`}>
                Pay at Hotel
              </h1>
            </motion.div>
            <motion.div className={`relative flex flex-col w-full space-y-2`}>
              <div>
                <motion.div
                  className={`relative flex text-left text-xl font-sans`}
                >
                  {`Enter your full name *`}
                </motion.div>
                <motion.div className={`relative flex my-2`}>
                  <input
                    className={`py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full`}
                    type={`name`}
                    name="name"
                    placeholder={`Full name`}
                    value={userFullName}
                    onChange={(val) => {
                      setUserFullName(val.target.value);
                    }}
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  className={`relative flex text-left text-xl font-sans`}
                >
                  {`Phone Number *`}
                </motion.div>
                <motion.div className={`relative flex my-2 w-full`}>
                  <PhoneInput
                    placeholder={`Phone Number`}
                    country={`in`}
                    inputClass="w-full"
                    searchPlaceholder="Phone number"
                    value={userMobileNumber}
                    onChange={(phone) => {
                      console.log(userMobileNumber);
                      setUserMobileNumber(String(phone));
                    }}
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  className={`relative flex text-left text-xl font-sans`}
                >
                  {`Email Id *`}
                </motion.div>
                <motion.div className={`relative flex my-2`}>
                  <input
                    className={`py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full`}
                    type={`email`}
                    name="emamil"
                    placeholder={`Email id`}
                    value={userEmailId}
                    onChange={(val) => {
                      setUserEmailId(val.target.value);
                    }}
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  className={`relative flex text-left text-xl font-sans`}
                >
                  {`Enter your address`}
                </motion.div>
                <motion.div className={`relative flex my-2 w-full`}>
                  <input
                    className={`py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full`}
                    name="address"
                    placeholder={`Address`}
                    value={userAddress}
                    onChange={(val) => {
                      setUserAddress(val.target.value);
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              onClick={bookHotelHandler}
              className={`relative flex justify-center align-middle items-center mt-5 w-fit px-6 py-2 bg-red-500 rounded-lg cursor-pointer`}
            >
              <p className={`font-mono font-semibold text-xl text-white`}>
                Book Now!
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </React.Fragment>
  );
}
