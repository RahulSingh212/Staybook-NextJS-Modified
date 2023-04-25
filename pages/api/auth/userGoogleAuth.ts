import { auth } from "@/lib/firebase";
import { Cookie } from "next-auth/core/lib/cookie";
// import cookie from "js-cookie"; // front end cookie which is present on the front end side
import cookie from "cookie"; // server side cookie only https and available on the server side

import { createUserAccount } from "@/lib/firebase/userHandler";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
  USER_ACCESS_TOKEN,
  unixToDate,
  extractJWTValues,
  COOKIE_EXPIRATOIN_TIME,
} from "@/lib/helper";

async function handler(req: any, res: any) {
  const data = req.body;
  const { authType, userAccessToken, userId, userEmail, userImageUrl, displayName } = data;

  try {
    if (authType === GOOGLE_SIGNUP) {
      await createUserAccount(
        userAccessToken,
        userId,
        userEmail,
        userImageUrl,
        "google",
        displayName,
      );
    }
    const response = await res.setHeader(
      "Set-Cookie",
      cookie.serialize(USER_ACCESS_TOKEN, userAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: COOKIE_EXPIRATOIN_TIME,
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(201).json({
      userCredentials: response,
      error: null,
      message: "Unable to set auth cookie!",
    });
  } catch (error) {
    console.log("User-Google-Auth-Error");
    console.log(error);
    res.status(422).json({
      userCredentials: null,
      error,
      message: "Error occoured",
    });
  }
}

export default handler;
