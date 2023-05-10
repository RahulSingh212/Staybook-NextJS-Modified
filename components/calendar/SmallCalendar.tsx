import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { getMonth } from "@/lib/calendar/calendarHandler";

type Props = {
  selectedDate: Date;
  setSelectedDate: Function;
  setCurrentMonth: Function;
  currentMonth: any;
};

export default function SmallCalendar(props: Props) {
  function handlePrevMonth() {
    const currYear = new Date(new Date().getTime()).getFullYear();
    const newDate = new Date(props.selectedDate.getTime());
    newDate.setMonth(newDate.getMonth() - 1);

    if (newDate.getFullYear() < currYear) return;
    console.log(props.setCurrentMonth(getMonth(newDate.getMonth())));
    props.setSelectedDate(newDate);
  }

  function handleNextMonth() {
    const currYear = new Date(new Date().getTime()).getFullYear();
    const newDate = new Date(props.selectedDate.getTime());
    newDate.setMonth(newDate.getMonth() + 1);

    if (newDate.getFullYear() > currYear + 2) return;
    console.log(props.setCurrentMonth(getMonth(newDate.getMonth())));
    props.setSelectedDate(newDate);
    console.log(props.currentMonth);
  }

  function getDayClass(day: any) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    // const slcDay = daySelected && daySelected.format(format);
    const slcDay = false;
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }
  return (
    <div className={`mt-5`}>
      <header className="flex justify-between">
        <p className="flex align-middle items-center text-gray-500 font-bold">
          {props.selectedDate.toLocaleString("default", {
            year: "numeric",
            month: "long",
          })}
        </p>
        <div>
          <button
            onClick={handlePrevMonth}
            className="rounded-full p-2 mx-1 hover:bg-gray-50"
          >
            <Image
              src={`/less-than.png`}
              alt="calendar"
              className="flex justify-center align-middle items-center w-4 h-4"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </button>
          <button
            onClick={handleNextMonth}
            className="rounded-full p-2 mx-1 hover:bg-gray-50"
          >
            <Image
              src={`/more-than.png`}
              alt="calendar"
              className="flex justify-center align-middle items-center w-4 h-4"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6 mt-2">
        {props.currentMonth[0].map((day: any, i: number) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {props.currentMonth.map((row: any, i: number) => (
          <React.Fragment key={i}>
            {row.map((day: any, idx: number) => (
              <button
                key={idx}
                onClick={() => {
                  // setSmallCalendarMonth(currentMonthIdx);
                  // setDaySelected(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
