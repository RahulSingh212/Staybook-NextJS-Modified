import { auth, db } from "@/lib/firebase";
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
  USER_COLLECTION_NAME,
} from "@/lib/helper";
import { doc, getDoc } from "firebase/firestore";

async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { userBooking } = receivedData;

  try {
    const cookies = parse(req.headers.cookie || "");
    const userAccessToken = await cookies[USER_ACCESS_TOKEN];

    if (userAccessToken) {
      const userObj = await extractJWTValues(userAccessToken);
      const userData: { user_id: string } = userObj as { user_id: string };
      const user_Id = userData.user_id;

      const docRef = doc(
        db,
        USER_COLLECTION_NAME,
        user_Id
      );
      const docSnap = await getDoc(docRef);

      res.status(201).json({
        userCredentials: docSnap.data(),
        error: null,
        message: "User access token value generated!",
      });
    } else {
      res.status(201).json({
        userCredentials: null,
        error: null,
        message: "User access token does not exists!",
      });
    }
  } catch (error) {
    res.status(422).json({
      userCredentials: null,
      error,
      message: "Error occoured",
    });
  }
}

export default handler;
