import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

type Props = {
  hotelDetails: any;
};

export default function HotelInformation(props: Props) {
  const router = useRouter();

  return (
    <React.Fragment>
      <motion.div className={``}></motion.div>
    </React.Fragment>
  );
}

// export async function getServerSideProps(context: any) {
//   const { params, req, res } = await context;

//   console.log(params.query);

//   if (!params) {
//     return {
//       props: {},
//     };
//   }
// }
