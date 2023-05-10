
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
  const receivedData = req.body;
  const { updateType } = receivedData;

  try {
    const cookies = parse(req.headers.cookie || "");
    const userAccessToken = cookies[USER_ACCESS_TOKEN];
    const userObj = await extractJWTValues(userAccessToken);
    const userData: { user_id: string } = userObj as { user_id: string };
    const user_Id = userData.user_id;
    console.log(user_Id);

    if (updateType === USER_UPDATE_TYPE_NAME) {
      const {
        headerValue1,
        textValue1,
        headerValue2,
        textValue2,
        headerValue3,
        textValue3,
      } = receivedData;
      
      const docRef = doc(db, USER_COLLECTION_NAME, user_Id);
      const newVal = { headerValue1: textValue1 };
      const response = await updateDoc(docRef, {
        [headerValue1]: textValue1,
        [headerValue2]: textValue2,
        [headerValue3]: textValue3,
      });
      res.status(201).json({
        userCredentials: response,
        error: null,
        message: "User access token value generated!",
      });
    } else {
      const { headerValue1, textValue1 } = receivedData;
      const docRef = doc(db, USER_COLLECTION_NAME, user_Id);
      const newVal = { headerValue1: textValue1 };
      const response = await updateDoc(docRef, { [headerValue1]: textValue1 });
      res.status(201).json({
        userCredentials: response,
        error: null,
        message: "User access token value generated!",
      });
    }
  } catch (error) {}
}

export default handler;
