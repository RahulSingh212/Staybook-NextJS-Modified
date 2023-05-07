import { cookies } from "next/headers";

import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import { USER_ACCESS_TOKEN } from "../helper";

export const hotelBookingHandler = async (userBooking: BookingDetails) => {
  const response = await fetch("/api/booking/setHotelBooking", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

export const fetchUserPersonalDetails = async (userBooking: BookingDetails) => {
  const response = await fetch("/api/userProfile/fetchUserDetails", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.userCredentials) {
    if (data.userCredentials.User_First_Name === "") {
        userBooking.user_Name = data.userCredentials.User_Display_Name;
    }
    else {
        userBooking.user_Name = data.userCredentials.User_First_Name + " " + data.userCredentials.User_Middle_Name + " " + data.userCredentials.User_Last_Name;
    }
    userBooking.user_Phone_Number = data.userCredentials.User_Mobile_Number;
    userBooking.user_Email_Id = data.userCredentials.User_Email_Id;
  }

  return userBooking;
};
