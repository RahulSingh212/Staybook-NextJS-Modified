import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import { SearchIcon } from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import moment from "moment";
import { format } from "date-fns";
import { addDays, getDateDifference } from "@/lib/helper";

type Props = {};

export default function SearchBar(props: Props) {
  const router = useRouter();
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [checkInDate, setCheckInDate] = React.useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = React.useState<Date>(
    addDays(new Date(), 1)
  );
  const [numberOfGuests, setNumberOfGuests] = React.useState<number>(2);
  const [searchBarPlaceHolder, setSearchBarPlaceHolder] =
    React.useState<string>("Search hotels in Delhi");

  const dateSelectionRange = {
    startDate: checkInDate,
    endDate: checkOutDate,
    key: "selection",
  };

  const rangeHandler = (selectedRange: any) => {
    setCheckInDate(selectedRange.selection.startDate);
    setCheckOutDate(selectedRange.selection.endDate);
  };

  const resetSearchTextHandler = () => {
    setSearchInput("");
  };

  const guestNumberHandler = (action: number) => {
    if (action === 1) {
      if (numberOfGuests <= 3) {
        setNumberOfGuests(numberOfGuests + 1);
      }
    } else {
      if (numberOfGuests >= 3) {
        setNumberOfGuests(numberOfGuests - 1);
      }
    }
  };

  const searchHandler = (event: any) => {
    router.push({
      pathname: "/search",
      query: {
        q: String(searchInput),
        checkin: String(moment(checkInDate).format("DD-MM-YYYY")),
        checkout: String(moment(checkOutDate).format("DD-MM-YYYY")),
        num_nights: String(getDateDifference(checkInDate, checkOutDate)),
        num_guests: String(numberOfGuests),
      },
    });
    resetSearchTextHandler();
  };

  return (
    <React.Fragment>
      <motion.div
        className={`relative w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] hidden md:flex flex-col justify-center items-center mx-auto`}
        // className={`hidden relative w-[45%] sm:flex flex-col justify-center items-center mx-auto`}
      >
        <motion.div
          initial={{ opacity: 0.0, y: -35 }}
          transition={{ duration: 2.0, type: "spring", stiffness: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          // className={`hidden relative w-[100%] sm:flex flex-row justify-between items-center md:border-2 rounded-full py-1 px-2 md:shadow-sm hover:shadow-md`}
          className={`relative w-[100%] flex flex-row justify-between items-center border-2 rounded-full py-1 px-2 shadow-sm hover:shadow-md`}
        >
          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            placeholder={searchBarPlaceHolder}
            // className={`flex-grow pl-2 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400`}
            className={`flex-grow pl-2 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400`}
          />
          <SearchIcon
            // className={`hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer`}
            className={`h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer`}
            onClick={searchHandler}
          />
        </motion.div>
        <motion.div
          className={`${!searchInput ? "hidden" : "absolute"} 
          w-fit align-middle items-center justify-center mt-[500px] p-2 rounded-lg bg-slate-100 z-30`}
          // w-fit align-middle items-center justify-center mt-[530px] p-2 rounded-lg bg-slate-100 z-50`}
          initial={{ opacity: 0.0 }}
          transition={{ duration: 4.0, type: "spring", stiffness: 200 }}
          whileInView={{ opacity: 1.0 }}
        >
          <div className={`flex`}>
            <DateRangePicker
              ranges={[dateSelectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={rangeHandler}
            />
          </div>
          <div className={`flex flex-row flex-between pt-2 border-b-2`}>
            <h2 className={`text-2xl font-semibold flex-grow`}>
              Number of Guests
            </h2>
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
              <UsersIcon className={`h-6`} />
              <input
                aria-label="Search"
                onChange={(e) => {}}
                type="number"
                value={numberOfGuests}
                min={2}
                max={4}
                className={`w-8 text-lg ml-2 text-right outline-none text-red-400`}
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
          <div className={`flex pt-2`}>
            <button
              className={`flex-grow text-gray-500`}
              onClick={resetSearchTextHandler}
            >
              Cancel
            </button>
            <button
              className={`flex-grow text-red-400`}
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
