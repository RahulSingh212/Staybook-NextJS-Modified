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
                  className={`relative flex align-middle items-center my-auto w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex`}>
                    <Image
                      src={`/nav-drop-down/hotels.png`}
                      alt="icon"
                      width={30}
                      height={30}
                      className={`rounded-full mr-2 border-[1px] border-gray-400`}
                    />
                    <h3 className={`my-auto font-serif text-lg font-medium`}>Hotels</h3>
                  </div>
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/packages"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex`}>
                    <Image
                      src={`/nav-drop-down/packages.png`}
                      alt="icon"
                      width={30}
                      height={30}
                      className={`rounded-full mr-2 border-[1px] border-gray-400`}
                    />
                    <h3 className={`my-auto font-serif text-lg font-medium`}>Tour Packages</h3>
                  </div>
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/blogs"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex`}>
                    <Image
                      src={`/nav-drop-down/blog.png`}
                      alt="icon"
                      width={30}
                      height={30}
                      className={`rounded-full mr-2 border-[1px] border-gray-400`}
                    />
                    <h3 className={`my-auto font-serif text-lg font-medium`}>Blogs</h3>
                  </div>
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/about"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex`}>
                    <Image
                      src={`/nav-drop-down/about.png`}
                      alt="icon"
                      width={30}
                      height={30}
                      className={`rounded-full mr-2 border-[1px] border-gray-400`}
                    />
                    <h3 className={`my-auto font-serif text-lg font-medium`}>About Us</h3>
                  </div>
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-200"></li>
              <Link href={"/contact"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex`}>
                    <Image
                      src={`/nav-drop-down/contact-us.png`}
                      alt="icon"
                      width={30}
                      height={30}
                      className={`rounded-full mr-2 border-[1px] border-gray-400`}
                    />
                    <h3 className={`my-auto font-serif text-lg font-medium`}>Contact Us</h3>
                  </div>
                </li>
              </Link>
              <li className="relative w-full p-[1px] my-1 bg-gray-300"></li>
              <Link href={"/login"}>
                <li
                  className={`relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`}
                >
                  <div className={`reltive flex`}>
                    <Image
                      src={`/nav-drop-down/my-profile.png`}
                      alt="icon"
                      width={30}
                      height={30}
                      className={`rounded-full mr-2 border-[1px] border-gray-400`}
                    />
                    <h3 className={`my-auto font-serif text-lg font-medium`}>My Profile</h3>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </motion.div>
    </React.Fragment>
  );
}
