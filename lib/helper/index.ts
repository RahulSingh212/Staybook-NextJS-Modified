import { hash } from "bcryptjs";
import jwt_decode from "jwt-decode";

export const EMAIL_SIGNUP = "email-sign-up";
export const EMAIL_LOGIN = "email-log-in";
export const GOOGLE_SIGNUP = "google-sign-up";
export const GOOGLE_LOGIN = "google-log-in";
export const HOTEL_OWNERS_COLLECTION_NAME = "HOTEL-PRICE-PLANNER-INFORMATION";
export const AFFILIATED_COLLECTION_NAME = "AFFLIATED-HOTELS";
export const HOTEL_ROOMS_COLLECTION_NAME = "HOTEL-ROOMS";
export const ROOM_PLANS_COLLECTION_NAME = "ROOM-PLANS";
export const ROOM_PRICE_PLANNER_COLLECTION_NAME = "ROOM-PRICE-PLANNER";

export const MONTH_NAME_LIST = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
export const USER_ACCESS_TOKEN = "user-access-token";
export const USER_COLLECTION_NAME = "USER-PERSONAL-INFORMATION";
export const COOKIE_EXPIRATOIN_TIME = 60 * 60;
export const GET_USER_TOKEN_OBJECT = "get-user-token-obj";
export const USER_UPDATE_TYPE_NAME = "update-user-name";

export function addDays(
  startDate: string | number | Date,
  numberOfDays: number
) {
  const result = new Date(startDate);
  result.setDate(result.getDate() + numberOfDays);
  return result;
}

export function getDateDifference(
  checkInDate: string | number | Date,
  checkOutDate: string | number | Date
) {
  var timeDiff =
    new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
  var dayDiff = timeDiff / (1000 * 3600 * 24);

  return Math.floor(dayDiff);
}

export async function getErrorMessage(errorValue: String) {
  if (errorValue === "auth/wrong-password") {
    return "Wrong combination of the credentials!";
  } else if (errorValue === "auth/email-already-in-use") {
    return "Email already is in use!";
  } else {
    return errorValue;
  }
}

export async function hashToken(token: string) {
  const hashedToken = await hash(token, 12);

  return hashedToken;
}

export const extractJWTValues = async (token: any) => {
  try {
    const decodedValue = await jwt_decode(token);
    return decodedValue;
  } catch (error) {
    return null;
  }
};

export const unixToDate = async (timeStamp: any) => {
  const dateObj = new Date(Number(timeStamp) * 1000);
  return dateObj;
};
