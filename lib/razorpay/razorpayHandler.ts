import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import crypto from "crypto";
import { useRouter } from "next/router";
import { hotelBookingHandler } from "../booking/bookingHandler";

export const paymentSignatureConfirmation = async (
  oId: string,
  pId: string,
  paymnentSignature: string
) => {
  const sigVal = `${oId}|${pId}`;
  const secret = process.env.NEXT_PUBLIC_RAZORPAY_SECRET || ""; // Replace with your actual secret value
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(sigVal.toString());
  const signature = hmac.digest("hex");

  if (signature === paymnentSignature) {
    return true;
  } else {
    return false;
  }
};

export const initializeRazorpay = (userBooking: BookingDetails) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const makePayment = async (
  userBooking: BookingDetails,
  setErrorMessage: Function,
  setErrorModel: Function,
  setLoadingModel: Function
) => {
  const res = await initializeRazorpay(userBooking);

  if (!res) {
    alert("Razorpay SDK Failed to load");
    setErrorMessage("Razorpay SDK Failed to load! Please try again.");
    setLoadingModel(false);
    setErrorModel(true);
    return;
  }

  // Make API call to the serverless API
  const data = await fetch("/api/booking/razorpay", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((t) => t.json());
  console.log(data);
  const receiptId = data.id;

  var options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "StayBook",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Staybook Hotel Booking",
    image: "/images/favicon.png",
    handler: async function (response: {
      razorpay_payment_id: any;
      razorpay_order_id: any;
      razorpay_signature: any;
    }) {
      userBooking.razorpay_Payment_Id = response.razorpay_payment_id;
      userBooking.razorpay_Order_Id = response.razorpay_order_id;
      userBooking.razorpay_Signature_Id = response.razorpay_signature;

      const paymentConfirmation = await paymentSignatureConfirmation(
        response.razorpay_order_id,
        response.razorpay_payment_id,
        response.razorpay_signature
      );

      if (paymentConfirmation) {
        userBooking.amount_Paid = userBooking.total_Price;
        userBooking.receipt_Id = receiptId;
        setLoadingModel(true);
        const data = await hotelBookingHandler(userBooking);

        const booking_status = "Booking Successful";
        const hotel_Name = userBooking.hotel_Name;
        const user_Name = userBooking.user_Name;
        const user_Email = userBooking.user_Email_Id;
        const user_Phone = userBooking.user_Phone_Number;
        const booking_receipt = userBooking.receipt_Id;

        const url = `/bookingInformation/${data.booking_Id}?booking_status=${encodeURIComponent(booking_status)}&hotel_Name=${encodeURIComponent(hotel_Name)}&user_Name=${encodeURIComponent(user_Name)}&user_Email=${encodeURIComponent(user_Email)}&user_Phone=${encodeURIComponent(user_Phone)}&booking_receipt=${encodeURIComponent(booking_receipt)}`;
        window.location.href = url;
      } 
      else {
        setErrorMessage("Booking Failed! Please try again.");
        setLoadingModel(false);
        setErrorModel(true);
      }
    },
    prefill: {
      name: userBooking.user_Name,
      email: userBooking.user_Email_Id,
      contact: userBooking.user_Phone_Number,
    },
    notes: {
      address: userBooking.user_Address,
    },
    theme: {
      color: "#CF8F24",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
