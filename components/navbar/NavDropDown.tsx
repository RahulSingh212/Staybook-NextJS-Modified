import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";

import { OfficeBuildingIcon, UsersIcon } from "@heroicons/react/solid";

type Props = {
  dropDown: boolean;
  setDropDown: any;
};

export default function NavDropDown(props: Props) {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0.0 }}
        transition={{ duration: 2.0, type: "spring", stiffness: 200 }}
        whileInView={{ opacity: 1 }}
        className={`absolute bg-white shadow-lg border-[1px] px-2 py-2 rounded-lg mt-4 right-2 z-50 overflow-y-scroll`}
        onClick={() => {
          props.setDropDown(false);
        }}
      >
        {props.dropDown && (
          <div className={`relative flex flex-col w-full overflow-y-scroll`}>
            <ul>
              <Link href={`/hotel`}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex space-x-1`}>
                    
                    <h3>Hotels</h3>
                  </div>
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/packages"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  Tour Packages
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/blogs"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  Blogs
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/about"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  About Us
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/contact"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  Contact Us
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-300"></li>
              <Link href={"/login"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  My Profile
                </li>
              </Link>
            </ul>
          </div>
        )}
      </motion.div>
    </React.Fragment>
  );
}
