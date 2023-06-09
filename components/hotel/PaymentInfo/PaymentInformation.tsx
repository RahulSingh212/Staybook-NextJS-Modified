import React from "react";
import { motion, motionValue, AnimatePresence } from "framer-motion";

import classes from "./PayOnHotelForm.module.scss";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Textarea, theme } from "@nextui-org/react";
import { bookingConfirmationRedirector, hotelBookingHandler } from "@/lib/booking/bookingHandler";
import { useRouter } from "next/router";
import { makePayment } from "@/lib/razorpay/razorpayHandler";

const shortid = require("shortid");

type Props = {
  userBooking: BookingDetails;
  setUserBooking: Function;

  setErrorMessage: Function;
  setErrorModel: Function;
  setLoadingModel: Function;
};

export default function PaymentInformation(props: Props) {
  const router = useRouter();
  const [paymentOption, setPaymentOption] = React.useState("pay-now");
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

  const bookHotelHandler = async (event: any) => {
    if (userFullName.length < 5) {
      return;
    } else if (userMobileNumber.length < 8) {
      return;
    } else if (!userEmailId.includes("@") || !userEmailId.includes(".")) {
      return;
    }

    props.userBooking.user_Name = userFullName;
    props.userBooking.user_Phone_Number = userMobileNumber;
    props.userBooking.user_Email_Id = userEmailId;
    props.setUserBooking(props.userBooking);

    if (paymentOption === "pay-now") {
      const razorPayResponse = await makePayment(
        props.userBooking,
        props.setErrorMessage,
        props.setErrorModel,
        props.setLoadingModel
      );
    } else {
      props.setLoadingModel(true);
      props.userBooking.receipt_Id = shortid.generate();
      const data = await hotelBookingHandler(props.userBooking);

      if (data.booking_Id === "") {
        props.setErrorMessage("Booking Failed! Please try again.");
        props.setLoadingModel(false);
        props.setErrorModel(true);
      } else {
        bookingConfirmationRedirector(
          router,
          data.booking_Id,
          data.receipt_Id,
          props.userBooking
        );
      }
    }
  };

  return (
    <React.Fragment>
      <motion.div
        id="user-info"
        className={`relative w-[95%] h-full flex flex-col justify-center items-center mx-auto mb-10`}
      >
        <motion.div
          className={`relative flex flex-col-reverse w-full md:flex-row `}
        >
          <motion.div
            className={`relative flex flex-col w-full md:w-[50%] lg:w-[40%] xl:w-[30%]`}
          >
            <motion.div
              className={`relative flex align-middle justify-center items-center mb-5 w-full`}
            >
              <h1
                id={"bookinginformation"}
                className={`font-semibold text-3xl font-serif`}
              >
                Booking Information
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
                    searchPlaceholder="Phone number"
                    value={userMobileNumber}
                    inputStyle={{
                      width: "100%",
                    }}
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
                  {`Select Payment Mode *`}
                </motion.div>
                <motion.div className={`relative flex my-2 w-full`}>
                  <select
                    className={`py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full cursor-pointer`}
                    value={paymentOption}
                    onChange={(event) => {
                      setPaymentOption(event.target.value);
                    }}
                  >
                    <option value="pay-now">Pay Now</option>
                    <option value="pay-at-hotel">Pay at Hotel</option>
                  </select>
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
          </motion.div>
          <motion.div
            className={`relative flex flex-col w-full md:w-[50%] lg:w-[60%] xl:w-[70%]`}
          ></motion.div>
        </motion.div>
        <motion.div
          className={`relative flex justify-center align-middle items-center mt-10 px-6 py-2 w-full`}
        >
          <div
            onClick={bookHotelHandler}
            className={`relative w-fit bg-red-500 px-6 py-2 rounded-lg cursor-pointer`}
          >
            <p className={`font-mono font-semibold text-xl text-white`}>
              Book Now!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
