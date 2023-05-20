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

import FullNavbar from "./FullNavbar";
import SearchBar from "./searchbar/SearchBar";
import NavDropDown from "./NavDropDown";
import { USER_ACCESS_TOKEN } from "@/lib/helper";
import { fetchUserImageUrl } from "@/lib/firebase/userHandler";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar(props: Props) {
  const [dropDown, setDropDown] = React.useState(false);
  const [fullNavbar, setFullNavbar] = React.useState<boolean>(false);
  const [searchBar, setSearchBar] = React.useState<boolean>(true);
  const router = useRouter();

  const urlHandler = (url: string) => {
    router.replace({ pathname: url });
  };

  const [image_Url, setImage_Url] = React.useState<string>("/user.png");
  React.useEffect(() => {
    async function fetchData() {
      const imgUrl = await fetchUserImageUrl();
      if (imgUrl !== "") {
        setImage_Url(imgUrl);
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {fullNavbar && (
        <FullNavbar fullNavbar={fullNavbar} setFullNavbar={setFullNavbar} />
      )}
      <header
        className={`sticky flex justify-between items-center align-middle top-0 z-40 grid-cols-3 bg-white shadow-md py-3 px-3`}
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
        <div className={`relative stickey w-full items-center align-middle`}>
          <SearchBar />
        </div>

        {/* Right Section */}
        <div>
          <div
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className={`flex relative space-x-2 text-gray-400 items-center align-middle cursor-pointer p-1 border-2 rounded-full shadow-sm hover:shadow-md`}
          >
            <MenuIcon height={30} width={40} />
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
          {dropDown && (
            <NavDropDown dropDown={dropDown} setDropDown={setDropDown} />
          )}
        </div>
      </header>
    </React.Fragment>
  );
}
