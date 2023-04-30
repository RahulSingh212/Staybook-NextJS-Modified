import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";

import CalendarDay from "./Day";
import dayjs from "dayjs";

type Props = {
  month: any;
  pricePlannerMatrix: any;
  showEventModal: boolean;
  setShowEventModal: Function;
};

export default function CalendarMonth(props: Props) {
  const currentYear = dayjs().year();
  return (
    <React.Fragment>
      <div className={`relative w-full flex-col`}>
        <div className={`relative flex-1 grid grid-cols-7 grid-rows-1`}>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Sun
          </div>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Mon
          </div>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Tue
          </div>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Wed
          </div>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Thr
          </div>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Fri
          </div>
          <div
            className={`relative py-4 px-2 border border-gray-300 text-center`}
          >
            Sat
          </div>
        </div>
        <div className="relative flex-1 grid grid-cols-7 grid-rows-5">
          {props.month.map((row: any, i: number) => (
            <React.Fragment key={i}>
              {row.map((day: any, idx: number) => (
                <CalendarDay
                  day={day}
                  key={idx}
                  rowIdx={i}
                  pricePlannerMatrix={props.pricePlannerMatrix}
                  currentYear={currentYear}
                  showEventModal={props.showEventModal}
                  setShowEventModal={props.setShowEventModal}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
