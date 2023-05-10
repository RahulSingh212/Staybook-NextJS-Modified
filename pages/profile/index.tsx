import React from "react";
import { motion, motionValue } from "framer-motion";
import Head from "next/head";
import { USER_ACCESS_TOKEN, extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";
import { getUserProfileDetails } from "@/lib/firebase/userHandler";
import { parse } from "cookie";

import {
  UserIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";

type Props = {
  userDetails: any;
};

export default function UserProfile(props: Props) {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>StayBook - Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={`w-screen`}>
        <motion.div
          className={`relative flex flex-col w-[90%] mt-10 align-middle mx-auto`}
        >
          <motion.div className={`relative flex w-full mt-3`}>
            <h1 className={`text-3xl font-bold`}>Account</h1>
          </motion.div>
          <div className={`relative flex flex-row mt-2 flex-wrap`}>
            <div className={`relative flex font-medium mr-1`}>
              {props.userDetails.User_Display_Name},
            </div>
            <div className={`relative flex font-light`}>
              {props.userDetails.User_Email_Id}.
            </div>
            <div
              onClick={() => {
                router.push({ pathname: "/profile/personal-info" });
              }}
              className={`relative flex underline font-semibold ml-2 cursor-pointer`}
            >
              Go to Profile
            </div>
          </div>
          <motion.div
            className={`relative flex flex-col w-full mt-10 mb-16 space-y-4`}
          >
            <motion.div
              onClick={() => {
                router.push({ pathname: "/profile/personal-info" });
              }}
              className={`realtive rounded-lg px-5 py-6 shadow-lg w-full md:w-[60%] lg:w-[40%] cursor-pointer flex-wrap hover:bg-gray-100`}
            >
              <div className={`p-2 rounded-full bg-gray-200 mb-10 w-fit`}>
                <UserIcon className={`h-8 w-8`} />
              </div>
              <h3 className={`font-semibold mb-2`}>Personal Information</h3>
              <p className={`text-gray-400 text-sm`}>
                Provide personal details and how we can reach you
              </p>
            </motion.div>
            <motion.div
              onClick={() => {
                router.push({ pathname: "/profile/my-bookings" });
              }}
              className={`realtive rounded-lg px-5 py-6 shadow-lg w-full md:w-[60%] lg:w-[40%] cursor-pointer flex-wrap hover:bg-gray-100`}
            >
              <div className={`p-2 rounded-full bg-gray-200 mb-10 w-fit`}>
                <BookmarkIcon className={`h-8 w-8`} />
              </div>
              <h3 className={`font-semibold mb-2`}>Hotel Bookings</h3>
              <p className={`text-gray-400 text-sm`}>
                Provide all your booking details at one place
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </React.Fragment>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const cookies = parse(req.headers.cookie || "");
  const userAccessToken = cookies[USER_ACCESS_TOKEN];
  const userAccessTokenObject = await extractJWTValues(userAccessToken);
  const userCollectionDoc = await getUserProfileDetails(userAccessTokenObject);
  // console.log(userCollectionDoc);
  return {
    props: {
      userDetails: userCollectionDoc,
    },
  };
}
