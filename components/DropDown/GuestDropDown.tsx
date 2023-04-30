import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Dropdown } from "@nextui-org/react";
import { UsersIcon } from "@heroicons/react/solid";

type Props = {
  firebase_Id: any;
};

export default function GuestDropDown(props: Props) {
  const router = useRouter();
  const [guestNum, setGuestNum] = React.useState<number>(2);
  const [selectedValue, setSelectedValue] = React.useState<String>(
    `Guests: ${guestNum}`
  );
  const menuItems = [
    { key: "2", name: "2 Guests" },
    { key: "3", name: "3 Guests" },
    { key: "4", name: "4 Guests" },
  ];

  function handleSelect(item: any) {
    console.log(item);
    setSelectedValue(item.value);
  }

  const guestNumberHandler = (action: number) => {
    if (action === 1) {
      if (guestNum <= 3) {
        setGuestNum(guestNum + 1);
      }
    } else {
      if (guestNum >= 3) {
        setGuestNum(guestNum - 1);
      }
    }
  };

  return (
    <React.Fragment>
      <motion.div
        className={`relative flex flex-row justify-between sm:justify-center items-center align-middle mt-5 sm:mt-0 z-0`}
      >
        <div className={`flex flex-row flex-between pt-2 border-b-2`}>
          <h2 className={`text-lg font-semibold flex-grow mr-2`}>Guests</h2>
          <div className={`flex items-center align-middle justify-center`}>
            <div
              className={`p-[6px] bg-gray-300 rounded-full mr-3 cursor-pointer`}
              onClick={() => guestNumberHandler(-1)}
            >
              <Image
                alt="icon"
                src={`/minus-icon.png`}
                width={"10"}
                height={"10"}
              />
            </div>
            <UsersIcon className={`h-4`} />
            <input
              aria-label="Search"
              onChange={(e) => {}}
              type="number"
              value={guestNum}
              min={2}
              max={4}
              className={`w-8 text-lg ml-1 text-right outline-none text-red-400`}
            />
            <div
              className={`p-[6px] bg-gray-300 rounded-full ml-3 cursor-pointer`}
              onClick={() => guestNumberHandler(1)}
            >
              <Image
                alt="icon"
                src={`/plus-icon.png`}
                width={"10"}
                height={"10"}
              />
            </div>
          </div>
        </div>
        <button
          className={`py-2 px-4 bg-red-300 rounded-full ml-0 sm:ml-4`}
          onClick={(e) => {
            router.push({
              pathname: `/calendar/${props.firebase_Id}/`,
              query: {
                num_guests: String(guestNum),
              },
            });
          }}
        >
          Calendar
        </button>
      </motion.div>
    </React.Fragment>
  );
}
