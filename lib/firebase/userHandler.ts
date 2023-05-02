import cookie from "js-cookie"; // front end cookie which is present on the front end side
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  GOOGLE_LOGIN,
  GOOGLE_SIGNUP,
  USER_ACCESS_TOKEN,
  USER_COLLECTION_NAME,
  GET_USER_TOKEN_OBJECT,
  extractJWTValues,
  USER_BOOKINGS_COLLECTION_NAME,
  BOOKED_ROOMS_COLLECTION_NAME,
  HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME,
} from "../helper";
import { auth, googleAuthProvider } from "./index";

import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { db } from ".";
import { useRouter } from "next/router";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import { RoomDetails } from "@/classModels/bookings/roomDetails";

export const googleAuthentication = async () => {
  try {
    const googleResponse = await signInWithPopup(auth, googleAuthProvider);
    const credential = GoogleAuthProvider.credentialFromResult(googleResponse);
    if (!credential) {
      return {
        userCredentials: null,
        error: null,
        message: "Google account not selected!",
      };
    }
    const user = googleResponse.user;
    const userAccessToken = await googleResponse.user.getIdToken();
    const userId = user.uid;
    const userEmail = user.email;
    const userImageUrl = user.photoURL;
    const displayName = user.displayName;

    let authType = "";
    const docRef = doc(db, USER_COLLECTION_NAME, userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      authType = GOOGLE_LOGIN;
    } else {
      authType = GOOGLE_SIGNUP;
    }

    const response = await fetch("/api/auth/userGoogleAuth", {
      method: "POST",
      body: JSON.stringify({
        authType,
        userAccessToken,
        userId,
        userEmail,
        userImageUrl,
        displayName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(user);
    return {
      userCredentials: user,
      error: null,
      message: "",
    };
  } catch (error) {
    console.log("User-Handler-Error");
    return {
      userCredentials: null,
      error,
      message: "Error occoured",
    };
  }
};

export const createUserAccount = async (
  accessToken: string,
  userId: string,
  userEmailId: string,
  userImageUrl = "",
  authType = "email",
  displayName = ""
) => {
  const response = await setDoc(doc(db, USER_COLLECTION_NAME, userId), {
    User_Id: userId,
    User_Access_Token: accessToken,
    User_Auth_Type: authType,
    User_Display_Name: displayName,
    User_First_Name: "",
    User_Middle_Name: "",
    User_Last_Name: "",
    User_Gender: "",
    User_Image_Url: userImageUrl,
    User_Mobile_Number: "",
    User_Alternate_Mobile_Number: "",
    User_Email_Id: userEmailId,
    User_Coins: "0",
  });
};

export const getUserAccessTokenObject = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const requestType = GET_USER_TOKEN_OBJECT;
  console.log(baseUrl);
  const response = await fetch(`/api/userProfile/fetchUserAccessToken`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("Cred " + data.userCredentials);
  return data.userCredentials;
};

export const getUserProfileDetails = async (userAccessTokenObject: any) => {
  const docRef = doc(db, USER_COLLECTION_NAME, userAccessTokenObject.user_id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getUserBookings = async (userAccessTokenObject: any) => {
  const userEmailId = userAccessTokenObject.email;
  const firestore = getFirestore();
  const bookingCollectionRef = collection(
    firestore,
    USER_BOOKINGS_COLLECTION_NAME,
    userEmailId,
    BOOKED_ROOMS_COLLECTION_NAME
  );
  const bookingsQuerySnapshot = await getDocs(bookingCollectionRef);

  let bookingList: BookingDetails[] = [];
  for (let booking of bookingsQuerySnapshot.docs) {
    const bookedRoomsCollectionRef = collection(
      firestore,
      USER_BOOKINGS_COLLECTION_NAME,
      userEmailId,
      BOOKED_ROOMS_COLLECTION_NAME,
      booking.id,
      HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME
    );
    let bookingInfo = new BookingDetails();

    let bookedRoomsList: RoomDetails[] = [];
    const roomsQuerySnapshot = await getDocs(bookedRoomsCollectionRef);

    for (let room of roomsQuerySnapshot.docs) {
      let roomInfo = new RoomDetails();
      roomInfo.room_Id = room.id;
      roomInfo.room_Name = room.data().room_Name;
      roomInfo.room_Info = room.data().room_Info;
      roomInfo.room_Count = room.data().room_Count;
      roomInfo.plan_Id = room.data().plan_Id;
      roomInfo.plan_Name = room.data().plan_Name;
      roomInfo.plan_Info = room.data().plan_Info;
      roomInfo.plan_Price = room.data().plan_Price;
      roomInfo.num_Guests = room.data().num_Guests;
      roomInfo.num_Children = room.data().num_Children;
      roomInfo.num_Infants = room.data().num_Infants;
      bookedRoomsList.push(roomInfo);
    }

    bookingInfo.roomsList = bookedRoomsList;
    bookingInfo.booking_Id = booking.id;
    bookingInfo.hotel_Image_Url = booking.data().hotel_Image_Url;
    bookingInfo.hotel_Name = booking.data().hotel_Name;
    bookingInfo.hotel_Landmark = booking.data().hotel_Landmark;
    bookingInfo.hotel_Owner_Id = booking.data().hotel_Owner_Id;
    bookingInfo.hotel_Firebase_Id = booking.data().hotel_Firebase_Id;
    bookingInfo.hotel_Sanity_Id = booking.data().hotel_Sanity_Id;
    bookingInfo.user_Unique_Id = booking.data().user_Unique_Id;
    bookingInfo.user_Email_Id = booking.data().user_Email_Id;
    bookingInfo.user_Name = booking.data().user_Name;
    bookingInfo.user_Phone_Number = booking.data().user_Phone_Number;
    bookingInfo.total_Rooms_Count = booking.data().total_Rooms_Count;
    bookingInfo.total_Room_Cost = booking.data().total_Room_Cost;
    bookingInfo.total_Tax = booking.data().total_Tax;
    bookingInfo.total_Price = booking.data().total_Price;
    bookingInfo.payment_Made = booking.data().payment_Made;
    bookingInfo.payment_Id = booking.data().payment_Id;
    bookingInfo.amount_Paid = booking.data().amount_Paid;
    bookingInfo.booking_Time = new Date(booking.data().booking_Time);
    bookingInfo.checkin_Time = new Date(booking.data().checkin_Time);
    bookingInfo.checkout_Time = new Date(booking.data().checkout_Time);

    bookingList.push(bookingInfo);
  }

  return JSON.stringify(bookingList);
};
