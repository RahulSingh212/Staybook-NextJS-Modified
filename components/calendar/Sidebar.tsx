import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";

import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

type Props = {
  selectedDate: Date;
  setSelectedDate: Function;
  setCurrentMonth: Function;
  currentMonth: any;
};

export default function CalendarSidebar(props: Props) {
  return (
    <React.Fragment>
      <aside className={`hidden lg:block border px-2 pt-4 w-72`}>
        <CreateEventButton />
        <SmallCalendar
          selectedDate={props.selectedDate}
          setSelectedDate={props.setSelectedDate}
          setCurrentMonth={props.setCurrentMonth}
          currentMonth={props.currentMonth}
        />
        {/* <Labels /> */}
      </aside>
    </React.Fragment>
  );
}
