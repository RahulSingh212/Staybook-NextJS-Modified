import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import { SearchIcon } from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";

type Props = {};

function addDays(startDate: string | number | Date, numberOfDays: number) {
  const result = new Date(startDate);
  result.setDate(result.getDate() + numberOfDays);
  return result;
}

function getDateDifference(
  checkInDate: string | number | Date,
  checkOutDate: string | number | Date
) {
  var timeDiff =
    new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
  var dayDiff = timeDiff / (1000 * 3600 * 24);

  return Math.floor(dayDiff);
}

export default function SearchBar(props: Props) {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [checkInDate, setCheckInDate] = React.useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = React.useState<Date>(
    addDays(new Date(), 1)
  );
  const [numberOfGuests, setNumberOfGuests] = React.useState<number>(2);

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

  const numberOfGuestsHandler = (action: number) => {
    if (action === 1) {
      if (numberOfGuests <= 3) {
        setNumberOfGuests(numberOfGuests+1);
      }
    }
    else {
      if (numberOfGuests >= 3) {
        setNumberOfGuests(numberOfGuests-1);
      }
    }
  }

  const searchHandler = (event: any) => {};

  return (
    <React.Fragment>
      <motion.div
        className={`hidden relative w-[45%] sm:flex flex-col justify-center items-center`}
      >
        <motion.div
          initial={{ opacity: 0.0, y: -35 }}
          transition={{ duration: 2.0, type: "spring", stiffness: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`hidden relative w-[100%] sm:flex flex-row justify-between items-center md:border-2 rounded-full py-1 px-2 md:shadow-sm hover:shadow-md`}
        >
          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            placeholder="Search hotels in Delhi"
            className={`flex-grow pl-2 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400`}
          />
          <SearchIcon
            className={`hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer`}
          />
        </motion.div>
        <motion.div
          className={`${
            !searchInput ? "hidden" : "absolute"
          } w-fit align-middle items-center justify-center mt-[530px] p-2 rounded-lg bg-slate-100`}
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
              <div className={`p-[6px] bg-gray-300 rounded-full mr-3 cursor-pointer`} onClick={() => numberOfGuestsHandler(-1)}>
                <Image alt="icon" src={`/minus-icon.png`} width={'10'} height={'10'} />
              </div>
              <UsersIcon className={`h-6`} />
              <input
                type="number"
                onChange={(e) => (console.log(e))}
                value={numberOfGuests}
                min={2}
                max={4}
                className={`w-6 text-lg ml-2 pr-2 text-right outline-none text-red-400`}
              />
              <div className={`p-[6px] bg-gray-300 rounded-full ml-3 cursor-pointer`} onClick={() => numberOfGuestsHandler(1)}>
                <Image alt="icon" src={`/plus-icon.png`} width={'10'} height={'10'} />
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
            <button className={`flex-grow text-red-400`}>Search</button>
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
