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
import moment from "moment";

type Props = {
  faqList: any[];
};

export default function HotelFAQCard(props: Props) {
  return (
    <React.Fragment>
      <motion.div className={``}></motion.div>
    </React.Fragment>
  );
}
