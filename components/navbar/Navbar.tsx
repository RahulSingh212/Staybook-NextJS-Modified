import React from "react";
import { motion, motionValue, animate } from "framer-motion";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SearchBar from "./searchbar/SearchBar";

type Props = {};

export default function Navbar(props: Props) {
  return (
    <React.Fragment>
      <header
        className={`sticky flex justify-between items-center align-middle top-0 z-50 grid-cols-3 bg-white shadow-md py-3 px-3`}
      >
        {/* Left Section */}
        <Link href={`/`}>
          <div
            className={`relative flex items-center align-middle h-10 w-40 cursor-pointer my-auto`}
          >
            <Image
              src={`/logo.png`}
              alt="icon"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className={``}
            />
          </div>
        </Link>

        {/* Middle Section */}
        <SearchBar />

        {/* Right Section */}
        <div
          className={`flex space-x-2 text-gray-400 items-center align-middle cursor-pointer p-1 border-2 rounded-full shadow-sm hover:shadow-md`}
        >
          <MenuIcon className={`h-6`} />
          <UserCircleIcon className={`h-8`} />
        </div>
      </header>
    </React.Fragment>
  );
}
