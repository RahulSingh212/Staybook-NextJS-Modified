import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

type Props = {
  imagesList: any[];
};

export default function AuthCard(props: Props) {
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const [isPasswordVisible, setPasswordVisible] =
    React.useState<boolean>(false);
  const [imgIdx, setHotelIdx] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newIdx = (imgIdx + Number(1)) % props.imagesList.length;
      setHotelIdx(newIdx);
    }, 8000);

    return () => clearInterval(interval);
  }, [imgIdx, props.imagesList.length]);

  return (
    <React.Fragment>
      <motion.div
        className={`relative w-[90%] sm:w-[95%] sm:h-[600px] xl:w-[1050px] flex justify-between shadow-xl rounded-2xl mt-5 p-5 bg-gray-200`}
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
              className={`flex flex-col w-full gap-4 align-middle items-center justify-center`}
              action=""
            >
              <input
                className={`p-3 rounded-xl border w-full lg:w-[80%] xl:[60%]`}
                type="text"
                name="email"
                placeholder="Email"
              />
              <div className={`relative w-full lg:w-[80%] xl:[60%]`}>
                <input
                  className={`p-3 rounded-xl border w-full`}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div
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
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                  />
                  <div
                    className={`absolute right-2 rounded-full bottom-1/4 cursor-pointer`}
                  >
                    {isPasswordVisible ? (
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
                className={`bg-red-600 py-3 w-[80%] md:w-[65%] lg:w-[55%] rounded-3xl items-center text-white font-semibold cursor-pointer shadow-md`}
              >
                Confirm
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
          <motion.div className="relative flex align-middle items-center justify-center bg-white p-3 w-[80%] md:w-[65%] lg:w-[55%] rounded-3xl font-semibold cursor-pointer shadow-md">
            <Image
              src={`/google-icon.png`}
              alt="icon"
              width={25}
              height={25}
              className={`mr-2`}
            />
            <button className={`text-gray-500`}>Login with Google</button>
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
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
