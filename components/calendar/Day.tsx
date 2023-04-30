import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";
import dayjs from "dayjs";

type Props = {
  day: any;
  rowIdx: any;
  currentYear: any;
  pricePlannerMatrix: any;
  showEventModal: boolean;
  setShowEventModal: Function;
};

export default function CalendarDay(props: Props) {
  const dayIdx = Number(props.day.format("DD")) - 1;
  const monthIdx = Number(props.day.format("MM")) - 1;
  const yearIdx = Number(props.day.format("YYYY")) - props.currentYear;
  const [basePrice, setBasePrice] = React.useState<number>(
    props.pricePlannerMatrix[yearIdx][monthIdx][dayIdx].plan_Base_Price
  );
  const [childPrice, setChildPrice] = React.useState<number>(
    props.pricePlannerMatrix[yearIdx][monthIdx][dayIdx].plan_Child_Price
  );
  const [infantPrice, setInfantPrice] = React.useState<number>(
    props.pricePlannerMatrix[yearIdx][monthIdx][dayIdx].plan_Infant_Price
  );

  function getCurrentDayClass() {
    // console.log(props.day.format("DD-MM-YY") + " " + dayjs().format("DD-MM-YY"));
    return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  

  return (
    <div
      className={`relative border border-gray-300 flex flex-col cursor-pointer p-1 rounded-md hover:bg-gray-100`}
      onClick={() => {
        // console.log(Number(props.day.format("DD")));
        // console.log(Number(props.day.format("MM")));
        // console.log( Number(props.day.format("YY")));
      }}
    >
      <header className="flex flex-col items-center">
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {props.day.format("DD")}
        </p>
      </header>
      <div className={`border-[1px]`}></div>
      <div className="relative flex flex-col flex-1 rounded-lg h-10 mt-1">
        <motion.div
          className={`relative flex flex-col lg:flex-row justify-between align-middle items-baseline`}
        >
          <h3 className={`text-gray-400 text-xs font-serif`}>Base Price:</h3>
          <p className={`text-gray-600`}>₹ {basePrice}</p>
        </motion.div>
        <motion.div
          className={`relative flex flex-col lg:flex-row justify-between align-middle items-baseline my-2 lg:my-1`}
        >
          <h3 className={`text-gray-400 text-xs font-serif`}>Child Price:</h3>
          <p className={`text-gray-600`}>₹ {childPrice}</p>
        </motion.div>
        <motion.div
          className={`relative flex flex-col lg:flex-row justify-between align-middle items-baseline`}
        >
          <h3 className={`text-gray-400 text-xs font-serif`}>Infant Price:</h3>
          <p className={`text-gray-600`}>₹ {infantPrice}</p>
        </motion.div>
      </div>
    </div>
  );
}
