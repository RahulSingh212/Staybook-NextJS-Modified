import { auth } from "@/lib/firebase";
import { Cookie } from "next-auth/core/lib/cookie";
// import cookie from "js-cookie"; // front end cookie which is present on the front end side
import cookie from "cookie"; // server side cookie only https and available on the server side
import { serialize, parse } from "cookie";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
  USER_ACCESS_TOKEN,
  unixToDate,
  GET_USER_TOKEN_OBJECT,
  extractJWTValues,
  COOKIE_EXPIRATOIN_TIME,
} from "@/lib/helper";

async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { requestType } = receivedData;

  try {
    const cookies = parse(req.headers.cookie || "");
    const userAccessToken = await cookies[USER_ACCESS_TOKEN];
    const userObj = await extractJWTValues(userAccessToken);
    console.log(userObj);
    res.status(201).json({
      userCredentials: userObj,
      error: null,
      message: "User access token value generated!",
    });
  } catch (error) {
    res.status(422).json({
      userCredentials: null,
      error,
      message: "Error occoured",
    });
  }
}

export default handler;
