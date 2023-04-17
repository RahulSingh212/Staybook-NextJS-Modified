import { auth } from "@/lib/firebase";
import { Cookie } from "next-auth/core/lib/cookie";
import cookie from "cookie";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
} from "@/lib/helper";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

async function handler(req: any, res: any) {
  const data = req.body;

  const { authType, userEmail, userPassword } = data;

  if (
    !userEmail ||
    !userEmail.includes("@") ||
    !userEmail.includes(".") ||
    !userPassword ||
    userPassword.trim().length < 7 ||
    userPassword.includes(" ")
  ) {
    res.status(422).json({
      userCredentials: null,
      error: null,
      message: "Invalid input - password must be at least 7 characters",
    });
    return;
  }

  try {
    if (authType === EMAIL_SIGNUP) {
      const response = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      res.status(201).json(response);
    } else if (authType === EMAIL_LOGIN) {
      const response = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      res.status(201).json(response);
    } else {
    }
  } catch (error) {
    res.status(422).json({
      userCredentials: null,
      error,
      message: "Error occoured",
    });
  }

  // res.status(201).json({ message: queryOutput });
  return;
}

export default handler;
