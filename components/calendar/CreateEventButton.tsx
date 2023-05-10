import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";

type Props = {};

export default function CreateEventButton() {
  return (
    <button
      //   onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-lg"
    >
      <Image
        src={`/plus-icon.png`}
        alt="create_event"
        className="w-7 h-7"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
