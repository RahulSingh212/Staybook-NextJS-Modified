import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import PackageCard from "@/components/package/PackageCard";

type Props = {
  packagesList: any[];
};

export default function TourPackages(props: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>StayBook Tour Packages</title>
        <meta
          name="description"
          content="StayBook Booking engine for Hotels enabled with high speed wifi throughout. There are different wifi connections on different floors. The guest can find the wifi passwords on the wifi cards inside of their rooms we have a specialized work station for our guests with high speed cables. Delhi hotels"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={`w-screen`}>
        <motion.div className={`relative w-full mt-3 mb-6`}>
          <h1 className={`text-center font-serif text-6xl`}>Tour Packages</h1>
        </motion.div>
        <motion.div className={`relative flex flex-col align-middle items-center w-full`}>
          {props.packagesList.map((pInfo: any, index: number) => (
            <PackageCard key={pInfo._id} packageInfo={pInfo} />
          ))}
        </motion.div>
      </main>
    </React.Fragment>
  );
}

export const getStaticProps = async (context: any) => {
  const packageQuery = groq`
    *[_type == "package"] {
      _id,
      name,
      time,
      description,
      highlight,
      "image_Url":image.asset->url,
    }
  `;

  const packagesList: any[] = await sanityClient.fetch(packageQuery);
  return {
    props: {
      packagesList,
    },
  };
};
