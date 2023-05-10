import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SearchBar from "./searchbar/SearchBar";
import { USER_ACCESS_TOKEN } from "@/lib/helper";
import { fetchUserImageUrl } from "@/lib/firebase/userHandler";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar(props: Props) {
  const [searchBar, setSearchBar] = React.useState<boolean>(true);
  const router = useRouter();

  const urlHandler = (url: string) => {
    router.replace({ pathname: url });
  };

  const [image_Url, setImage_Url] = React.useState<string>("/user.png");
  React.useEffect(() => {
    async function fetchData() {
      const imgUrl = await fetchUserImageUrl();
      setImage_Url(imgUrl);
    }
    fetchData();
  }, []);

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

        <div
          className={`relative flex align-middle items-center space-x-3`}
        >
          <div
            onClick={urlHandler.bind(null, "/hotel")}
            className={`hidden md:inline-block relative rounded-lg px-3 py-1 cursor-pointer text-gray-600 hover:text-white font-sans hover:bg-red-500`}
          >
            Hotels
          </div>
          <div
            onClick={urlHandler.bind(null, "/packages")}
            className={`hidden md:inline-block relative rounded-lg px-3 py-1 cursor-pointer text-gray-600 hover:text-white font-sans hover:bg-red-500`}
          >
            Tour Packages
          </div>
          <div
            onClick={urlHandler.bind(null, "/blogs")}
            className={`hidden md:inline-block relative rounded-lg px-3 py-1 cursor-pointer text-gray-600 hover:text-white font-sans hover:bg-red-500`}
          >
            Blogs
          </div>
          <div
            onClick={urlHandler.bind(null, "/about")}
            className={`hidden md:inline-block relative rounded-lg px-3 py-1 cursor-pointer text-gray-600 hover:text-white font-sans hover:bg-red-500`}
          >
            About Us
          </div>
          <div
            onClick={urlHandler.bind(null, "/contact")}
            className={`hidden md:inline-block relative rounded-lg px-3 py-1 cursor-pointer text-gray-600 hover:text-white font-sans hover:bg-red-500`}
          >
            Contact Us
          </div>
          {/* <motion.div
            onClick={() => {setSearchBar(!searchBar)}}
            className={`relative rounded-lg px-3 py-1 cursor-pointer text-gray-600 hover:text-white font-sans hover:bg-red-500`}
          >
            Search
          </motion.div> */}
        </div>
        {/* Middle Section */}
        {/* <SearchBar /> */}

        {/* Right Section */}
        <Link href={"/login"}>
          <div
            className={`flex space-x-2 text-gray-400 items-center align-middle cursor-pointer p-1 border-2 rounded-full shadow-sm hover:shadow-md`}
          >
            <MenuIcon className={`h-6`} />
            {/* <UserCircleIcon className={`h-8`} /> */}
            <Image
              src={image_Url}
              alt="icon"
              height={30}
              width={30}
              objectFit="contain"
              objectPosition="left"
              className={`rounded-full`}
            />
          </div>
        </Link>
      </header>
      {searchBar && (
        <div className={`relative stickey w-full top-3 items-center align-middle`}>
          <SearchBar />
        </div>
      )}
    </React.Fragment>
  );
}
