import cookie from "js-cookie"; // front end cookie which is present on the front end side
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  GOOGLE_LOGIN,
  GOOGLE_SIGNUP,
  USER_ACCESS_TOKEN,
  USER_COLLECTION_NAME,
  GET_USER_TOKEN_OBJECT,
  extractJWTValues,
} from "../helper";
import { auth, googleAuthProvider } from "./index";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from ".";
import { useRouter } from "next/router";

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
  displayName = "",
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
  console.log(baseUrl)
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
}