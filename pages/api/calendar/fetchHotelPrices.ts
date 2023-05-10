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
} from "@/lib/helper";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { hotelPriceRangeMatrix } from "@/lib/calendar/calendarHandler";

async function handler(req: any, res: any) {
  const priceList = hotelPriceRangeMatrix();
  const receivedData = req.body;
  const { firebase_Hotel_Id, hotelOwnerUniqueId, hotelUniqueId, fromDate, toDate, num_guests } = receivedData;

  // const hotelOwnerUniqueId = "WKIwkkplX4U6ECb2dqpltKlh4WD2";
  // const hotelUniqueId = "f9EVYs1fi61PbFlI5JeR";
  const startDate = new Date(Date.parse(fromDate));
  const endDate = new Date(Date.parse(toDate));

  var yearVal = startDate.getFullYear();
  var monthVal = startDate.getMonth();
  var dateVal = startDate.getDate() + 1;

  try {
    const docRef = collection(
      db,
      HOTEL_OWNERS_COLLECTION_NAME,
      hotelOwnerUniqueId,
      AFFILIATED_COLLECTION_NAME,
      hotelUniqueId,
      HOTEL_ROOMS_COLLECTION_NAME,
      `GUESTS-COUNT-${num_guests}`,
      ROOM_PLANS_COLLECTION_NAME
    );
    const docSnap = await getDocs(docRef);
    let list: any[] = [];
    const hotelData = await docSnap.forEach((val: any) => {
      list.push(val.data());
    });
    console.log(list);

    res.status(201).json({
      hotelPrice: list,
      error: null,
      message: "Successfully price generated!",
    });
  } catch (error) {}
}

export default handler;

