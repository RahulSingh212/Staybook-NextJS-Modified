import { auth } from "@/lib/firebase";
import { Cookie } from "next-auth/core/lib/cookie";
// import cookie from "js-cookie"; // front end cookie which is present on the front end side
import cookie from "cookie"; // server side cookie only https and available on the server side
import { serialize, parse } from "cookie";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
  USER_ACCESS_TOKEN,
  USER_COLLECTION_NAME,
  unixToDate,
  GET_USER_TOKEN_OBJECT,
  extractJWTValues,
  COOKIE_EXPIRATOIN_TIME,
  USER_UPDATE_TYPE_NAME,
} from "@/lib/helper";

async function handler(req: any, res: any) {

}

export default handler;