import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { auth } from "@/lib/firebase";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import LoadingModel from "../models/Loading/LoadingModel";
import ErrorModel from "../models/Error/ErrorModel";

import {
  EMAIL_SIGNUP,
  EMAIL_LOGIN,
  GOOGLE_SIGNUP,
  GOOGLE_LOGIN,
  getErrorMessage,
} from "@/lib/helper";
import { googleAuthentication } from "@/lib/firebase/userHandler";

type Props = {
  imagesList: any[];
};

export const userEmailAuthApiHandler = async (
  authType: any,
  userEmail: any,
  userPassword: any
) => {
  const response = await fetch("/api/auth/userEmailAuth", {
    method: "POST",
    body: JSON.stringify({ authType, userEmail, userPassword }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};

export default function AuthCard(props: Props) {
  const router = useRouter();
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = React.useRef<HTMLInputElement>(null);

  const [loadingModelVisible, setLoadingModel] = React.useState<boolean>(false);
  const [errorModelVisible, setErrorModel] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const [googleLogin, setGoogleLogin] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const [isPasswordVisible, setPasswordVisible] =
    React.useState<boolean>(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState<boolean>(false);
  const [imgIdx, setHotelIdx] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newIdx = (imgIdx + Number(1)) % props.imagesList.length;
      setHotelIdx(newIdx);
    }, 1750);

    return () => clearInterval(interval);
  }, [imgIdx, props.imagesList.length]);

  const googleLoginHandler = async () => {
    const userResponse = await googleAuthentication();

    if (!userResponse.userCredentials && !userResponse.error) {
      setErrorMessage(String(userResponse.message));
      setErrorModel(true);
    } else if (userResponse.error) {
      console.log("User error: " + userResponse.error);
      const displayErrorMsg = await getErrorMessage(
        "Google authentication error!"
      );
      setErrorMessage(String(displayErrorMsg));
      setErrorModel(true);
    } else {
      setLoadingModel(true);
      router.push("/profile");
    }
  };

  const emailLoginHandler = async (event: any) => {
    event.preventDefault();

    setLoadingModel(true);

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current?.value;

    if (!isLogin && enteredPassword !== enteredConfirmPassword) {
      setLoadingModel(false);
      setErrorMessage("Password does not match!");
      setErrorModel(true);
      console.log("Entered Password does not match");
      return;
    }

    try {
      const userResponse = await userEmailAuthApiHandler(
        isLogin ? EMAIL_LOGIN : EMAIL_SIGNUP,
        enteredEmail,
        enteredPassword
      );
      console.log("UserResponse");
      console.log(userResponse);
      if (userResponse.error) {
        setLoadingModel(false);
        setErrorModel(true);
        const displayErrorMsg = await getErrorMessage(userResponse.error.code);
        setErrorMessage(String(displayErrorMsg));
      } else {
        // setLoadingModel(false);
        router.push("/profile");
      }
    } catch (error: any) {
      setLoadingModel(false);
      setErrorModel(true);
      setErrorMessage("Authentication failed!");
    }
  };

  return (
    <React.Fragment>
      <LoadingModel
        modelVisible={loadingModelVisible}
        setLoadingModel={setLoadingModel}
      />
      <ErrorModel
        errorMsg={errorMessage}
        setErrorMessage={setErrorMessage}
        modelVisible={errorModelVisible}
        setErrorModel={setErrorModel}
      />
      <motion.div
        className={`relative w-[90%] sm:w-[95%] sm:h-[600px] xl:w-[1150px] flex justify-between shadow-2xl rounded-2xl mt-5 p-5 bg-gray-100`}
      >
        <motion.div
          className={`relative flex flex-col w-full sm:w-[50%] h-full items-center justify-center`}
        >
          <motion.div className={`relative w-full mb-2`}>
            <h2
              className={`text-4xl font-semibold font-serif text-gray-600 text-center`}
            >
              {isLogin ? "Log-in" : "Sign-up"}
            </h2>
          </motion.div>
          <motion.div className={`relative w-full mb-6`}>
            <p className={`font-light text-md text-red-600 text-center`}>
              Please enter your credentails
            </p>
          </motion.div>
          <motion.div
            className={`relative flex w-full align-middle items-center justify-center`}
          >
            <form
              onSubmit={emailLoginHandler}
              className={`flex flex-col w-full gap-4 align-middle items-center justify-center`}
              action=""
            >
              <input
                className={`p-3 rounded-xl border w-full lg:w-[80%] xl:[60%]`}
                type="text"
                name="email"
                placeholder="Email"
                ref={emailInputRef}
              />
              <div className={`relative w-full lg:w-[80%] xl:[60%]`}>
                <input
                  className={`p-3 rounded-xl border w-full`}
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  ref={passwordInputRef}
                />
                <div
                  onClick={() => setPasswordVisible(!isPasswordVisible)}
                  className={`absolute right-2 rounded-full bottom-1/4 cursor-pointer`}
                >
                  {isPasswordVisible ? (
                    <EyeIcon className={`relative h-5 w-5 rounded-full`} />
                  ) : (
                    <EyeOffIcon className={`relative h-5 w-5 rounded-full`} />
                  )}
                </div>
              </div>

              {!isLogin ? (
                <div className={`relative w-full lg:w-[80%] xl:[60%]`}>
                  <input
                    className={`p-3 rounded-xl border w-full`}
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Confirm Password"
                    ref={confirmPasswordInputRef}
                  />
                  <div
                    onClick={() =>
                      setConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                    className={`absolute right-2 rounded-full bottom-1/4 cursor-pointer`}
                  >
                    {isConfirmPasswordVisible ? (
                      <EyeIcon className={`relative h-5 w-5 rounded-full`} />
                    ) : (
                      <EyeOffIcon className={`relative h-5 w-5 rounded-full`} />
                    )}
                  </div>
                </div>
              ) : (
                <div />
              )}
              <button
                className={`bg-red-600 py-3 w-[82.5%] md:w-[65%] lg:w-[55%] rounded-3xl items-center text-white font-semibold cursor-pointer shadow-md`}
              >
                {isLogin ? "Log in" : "Sign up"}
              </button>
            </form>
          </motion.div>
          <motion.div
            className={`relative my-5 grid grid-cols-3 items-center align-middle w-full lg:w-[80%] xl:[60%] text-center`}
          >
            <hr className={`border-gray-400`} />
            <p className={`text-center`}>OR</p>
            <hr className={`border-gray-400`} />
          </motion.div>
          <motion.div
            onClick={googleLoginHandler}
            className="relative flex align-middle items-center justify-center bg-white p-3 w-[82.5%] md:w-[65%] lg:w-[55%] rounded-3xl font-semibold cursor-pointer shadow-md"
          >
            <Image
              src={`/google-icon.png`}
              alt="icon"
              width={25}
              height={25}
              className={`mr-2`}
            />
            <button className={`text-gray-500`}>
              {isLogin ? "Log-in" : "Sign-up"} with Google
            </button>
          </motion.div>
          <div className={`relative w-full lg:w-[80%] xl:[60%] my-8`}>
            <hr className={`border-gray-400`} />
          </div>
          <motion.div
            className={`relative flex w-full lg:w-[80%] xl:[60%] align-middle items-center justify-between`}
          >
            <div>
              <p className={`text-md text-gray-600`}>
                {isLogin ? "Create new account" : "Login to your account"}
              </p>
            </div>
            <div
              onClick={() => setIsLogin(!isLogin)}
              className={`py-1 px-5 rounded-full border-[1px] border-gray-300 bg-white cursor-pointer hover:shadow-md text-gray-500`}
            >
              {isLogin ? "Sign-up" : "Log-in"}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className={`hidden sm:block relative w-[45%] h-full shadow-2xl rounded-lg`}
        >
          <Image
            className={`rounded-lg`}
            src={`${props.imagesList[imgIdx].url}`}
            alt="amenity-img"
            layout="fill"
            objectFit="cover"
          />
          <div
            className={`absolute w-full text-center top-2 bg-slate-200 px-2`}
          >
            <h2 className={`text-2xl font-serif text-center`}>
              {props.imagesList[imgIdx].name}
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
