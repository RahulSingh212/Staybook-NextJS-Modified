import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

type Props = {};

export default function ContactUs(props: Props) {
    return (
        <React.Fragment>
          <Head>
            <title>StayBook - Contact Us</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/favicon.png" />
          </Head>
          <main>
            Contact Us
          </main>
        </React.Fragment>
      );
}