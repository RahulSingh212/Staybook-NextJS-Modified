import { auth } from "@/lib/firebase";
import { Cookie } from "next-auth/core/lib/cookie";
// import cookie from "js-cookie"; // front end cookie which is present on the front end side
import cookie from "cookie"; // server side cookie only https and available on the server side
import { serialize, parse } from "cookie";
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
  USER_ACCESS_TOKEN,
  USER_COLLECTION_NAME,
  GET_USER_TOKEN_OBJECT,
  unixToDate,
  extractJWTValues,
  COOKIE_EXPIRATOIN_TIME,
  USER_UPDATE_TYPE_NAME,
  USER_BOOKINGS_COLLECTION_NAME,
  HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME,
  BOOKED_ROOMS_COLLECTION_NAME,
  HOTEL_BOOKINGS_COLLECTION_NAME,
} from "@/lib/helper";

const shortid = require("shortid");

const ownerHotelBookingList = async (userBooking: any, userBookingId: any, receiptId: string) => {
  const docBookingRef = doc(
    db,
    HOTEL_BOOKINGS_COLLECTION_NAME,
    userBooking.hotel_Owner_Id,
    userBooking.hotel_Firebase_Id,
    userBookingId
  );

  const response = await setDoc(docBookingRef, {
    booking_Id: userBookingId,
    booking_Time: String(userBooking.booking_Time),
    checkin_Time: String(userBooking.checkin_Time),
    checkout_Time: String(userBooking.checkout_Time),
    hotel_Image_Url: userBooking.hotel_Image_Url,
    hotel_Name: userBooking.hotel_Name,
    hotel_Landmark: userBooking.hotel_Landmark,
    hotel_Firebase_Id: userBooking.hotel_Firebase_Id,
    hotel_Sanity_Id: userBooking.hotel_Sanity_Id,
    total_Rooms_Count: userBooking.total_Rooms_Count,
    total_Room_Cost: userBooking.total_Room_Cost.toFixed(2),
    total_Tax: userBooking.total_Tax.toFixed(2),
    total_Price: userBooking.total_Price.toFixed(2),
    payment_Made:
      Math.floor(userBooking.amount_Paid) ===
      Math.floor(userBooking.total_Price),
    amount_Paid: userBooking.amount_Paid,
    booking_Status: true,
    user_Unique_Id: userBooking.user_Unique_Id,
    user_Name: userBooking.user_Name,
    user_Address: userBooking.user_Address,
    user_Email_Id: userBooking.user_Email_Id,
    user_Phone_Number: userBooking.user_Phone_Number,

    razorpay_Payment_Id: userBooking.razorpay_Payment_Id,
    razorpay_Order_Id: userBooking.razorpay_Order_Id,
    razorpay_Signature_Id: userBooking.razorpay_Signature_Id,
    receipt_Id: receiptId,
  });

  for (let i = 0; i < userBooking.roomsList.length; i++) {
    const roomRef = await addDoc(
      collection(
        db,
        HOTEL_BOOKINGS_COLLECTION_NAME,
        userBooking.hotel_Owner_Id,
        userBooking.hotel_Firebase_Id,
        userBookingId,
        HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME
      ),
      {
        room_Id: userBooking.roomsList[i].room_Id,
        room_Name: userBooking.roomsList[i].room_Name,
        room_Info: userBooking.roomsList[i].room_Info,
        room_Count: userBooking.roomsList[i].room_Count,
        plan_Id: userBooking.roomsList[i].plan_Id,
        plan_Name: userBooking.roomsList[i].plan_Name,
        plan_Info: userBooking.roomsList[i].plan_Info,
        plan_Price: userBooking.roomsList[i].plan_Price,
        num_Guests: userBooking.roomsList[i].num_Guests,
        num_Children: userBooking.roomsList[i].num_Children,
        num_Infants: userBooking.roomsList[i].num_Infants,
      }
    );
  }

  return response;
};

const userHotelBookingListing = async (userBooking: any, receiptId:string) => {
  const userDocRef = await addDoc(
    collection(
      db,
      USER_BOOKINGS_COLLECTION_NAME,
      userBooking.user_Email_Id,
      BOOKED_ROOMS_COLLECTION_NAME
    ),
    {
      booking_Id: "",
      booking_Time: String(userBooking.booking_Time),
      checkin_Time: String(userBooking.checkin_Time),
      checkout_Time: String(userBooking.checkout_Time),
      hotel_Image_Url: userBooking.hotel_Image_Url,
      hotel_Name: userBooking.hotel_Name,
      hotel_Landmark: userBooking.hotel_Landmark,
      hotel_Owner_Id: userBooking.hotel_Owner_Id,
      hotel_Firebase_Id: userBooking.hotel_Firebase_Id,
      hotel_Sanity_Id: userBooking.hotel_Sanity_Id,
      total_Rooms_Count: userBooking.total_Rooms_Count,
      total_Room_Cost: userBooking.total_Room_Cost.toFixed(2),
      total_Tax: userBooking.total_Tax.toFixed(2),
      total_Price: userBooking.total_Price.toFixed(2),
      payment_Made:
        userBooking.amount_Paid.toFixed(2) ===
        userBooking.total_Price.toFixed(2),
      amount_Paid: userBooking.amount_Paid,
      booking_Status: true,
      user_Unique_Id: userBooking.user_Unique_Id,
      user_Name: userBooking.user_Name,
      user_Address: userBooking.user_Address,
      user_Email_Id: userBooking.user_Email_Id,
      user_Phone_Number: userBooking.user_Phone_Number,

      razorpay_Payment_Id: userBooking.razorpay_Payment_Id,
      razorpay_Order_Id: userBooking.razorpay_Order_Id,
      razorpay_Signature_Id: userBooking.razorpay_Signature_Id,
      receipt_Id: receiptId,
    }
  );

  const docRef = doc(
    db,
    USER_BOOKINGS_COLLECTION_NAME,
    userBooking.user_Email_Id,
    BOOKED_ROOMS_COLLECTION_NAME,
    userDocRef.id
  );
  const response = await updateDoc(docRef, {
    booking_Id: userDocRef.id,
  });

  for (let i = 0; i < userBooking.roomsList.length; i++) {
    const roomRef = await addDoc(
      collection(
        db,
        USER_BOOKINGS_COLLECTION_NAME,
        userBooking.user_Email_Id,
        BOOKED_ROOMS_COLLECTION_NAME,
        userDocRef.id,
        HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME
      ),
      {
        room_Id: userBooking.roomsList[i].room_Id,
        room_Name: userBooking.roomsList[i].room_Name,
        room_Info: userBooking.roomsList[i].room_Info,
        room_Count: userBooking.roomsList[i].room_Count,
        plan_Id: userBooking.roomsList[i].plan_Id,
        plan_Name: userBooking.roomsList[i].plan_Name,
        plan_Info: userBooking.roomsList[i].plan_Info,
        plan_Price: userBooking.roomsList[i].plan_Price,
        num_Guests: userBooking.roomsList[i].num_Guests,
        num_Children: userBooking.roomsList[i].num_Children,
        num_Infants: userBooking.roomsList[i].num_Infants,
      }
    );
  }

  return userDocRef;
};

async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { userBooking } = receivedData;
  //   const bookingObj = JSON.parse(userBooking);

  try {
    const cookies = parse(req.headers.cookie || "");
    const userAccessToken = cookies[USER_ACCESS_TOKEN];

    if (userAccessToken) {
      const cookies = parse(req.headers.cookie || "");
      const userAccessToken = cookies[USER_ACCESS_TOKEN];
      const userObj = await extractJWTValues(userAccessToken);
      const userData1: { email: string } = userObj as { email: string };
      const userData2: { user_id: string } = userObj as { user_id: string };
      userBooking.user_Unique_Id = userData2.user_id;
      userBooking.user_Email_Id = userData1.email;
    }

    const receipt_Id = await shortid.generate();
    const userDocRef = await userHotelBookingListing(userBooking, receipt_Id);
    const ownerDocRef = await ownerHotelBookingList(userBooking, userDocRef.id, receipt_Id);

    res.status(201).json({
      userCredentials: userDocRef,
      ownerCredentails: ownerDocRef,
      booking_Id: userDocRef.id,
      receipt_Id: receipt_Id,
      error: null,
      message: "User access token value generated!",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      userCredentials: null,
      ownerCredentails: null,
      booking_Id: "",
      receipt_Id: "",
      error,
      message: "Error occoured",
    });
  }
}

export default handler;
