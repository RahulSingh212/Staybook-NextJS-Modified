import { auth, db } from "@/lib/firebase";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
  USER_ACCESS_TOKEN,
  unixToDate,
  extractJWTValues,
  COOKIE_EXPIRATOIN_TIME,
  USER_COLLECTION_NAME,
  MONTH_NAME_LIST,
  HOTEL_OWNERS_COLLECTION_NAME,
  AFFILIATED_COLLECTION_NAME,
  HOTEL_ROOMS_COLLECTION_NAME,
  ROOM_PLANS_COLLECTION_NAME,
  ROOM_PRICE_PLANNER_COLLECTION_NAME,
} from "@/lib/helper";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";

async function handler(req: any, res: any) {
  const receivedData = req.body;
  const {
    firebase_Hotel_Id,
    hotelOwnerUniqueId,
    hotelUniqueId,
    selectedDate,
    num_guests,
    roomPlanUniqueId,
    plan_Base_Price,
    plan_Child_Price,
    plan_Infant_Price,
  } = receivedData;

  var yearVal = selectedDate.getFullYear();
  var monthVal = selectedDate.getMonth();
  var dateVal = selectedDate.getDate() + 1;

  console.log(yearVal + " " + monthVal + " " + dateVal);

  // try {
  //   const docRef = doc(
  //     db,
  //     HOTEL_OWNERS_COLLECTION_NAME,
  //     hotelOwnerUniqueId,
  //     AFFILIATED_COLLECTION_NAME,
  //     hotelUniqueId,
  //     HOTEL_ROOMS_COLLECTION_NAME,
  //     `GUEST-COUNT-${num_guests}`,
  //     ROOM_PLANS_COLLECTION_NAME,
  //     roomPlanUniqueId,
  //     ROOM_PRICE_PLANNER_COLLECTION_NAME,
  //     `${yearVal}`,
  //     `${MONTH_NAME_LIST[monthVal]}`,
  //     `${dateVal}`
  //   );

  //   const response = await updateDoc(docRef, {
  //     plan_Base_Price: plan_Child_Price,
  //     plan_Child_Price: plan_Child_Price,
  //     plan_Infant_Price: plan_Infant_Price,
  //   });

  //   res.status(201).json({
  //     userCredentials: response,
  //     error: null,
  //     message: "User access token value generated!",
  //   });
  // } catch (error) {}
}
