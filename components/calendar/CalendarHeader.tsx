import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
import { getMonth } from "@/lib/calendar/calendarHandler";
import { Dropdown } from "@nextui-org/react";
import { motion } from "framer-motion";

type Props = {
  selectedDate: Date;
  setSelectedDate: Function;
  setCurrentMonth: Function;
  currentMonth: any;
};

export default function CalendarHeader(props: Props) {
  function handlePrevMonth() {
    const currYear = new Date(new Date().getTime()).getFullYear();
    const newDate = new Date(props.selectedDate.getTime());
    newDate.setMonth(newDate.getMonth() - 1);

    if (newDate.getFullYear() < currYear) return;
    props.setCurrentMonth(getMonth(newDate.getFullYear(), newDate.getMonth()));
    props.setSelectedDate(newDate);
  }

  function handleNextMonth() {
    const currYear = new Date(new Date().getTime()).getFullYear();
    const newDate = new Date(props.selectedDate.getTime());
    newDate.setMonth(newDate.getMonth() + 1);

    if (newDate.getFullYear() > currYear + 2) return;
    props.setCurrentMonth(getMonth(newDate.getFullYear(), newDate.getMonth()));
    props.setSelectedDate(newDate);
  }

  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];

  return (
    <header className="relative w-full py-2 flex items-center">
      <img
        src={`/google-calendar.png`}
        alt="calendar"
        className="mr-2 w-12 h-12"
      />
      <h1 className="mr-5 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button
        onClick={() => props.setSelectedDate(new Date())}
        className="border rounded-md py-2 px-4 hover:bg-slate-200 hover:shadow-md"
      >
        Today
      </button>
      <button
        onClick={handlePrevMonth}
        className="rounded-full p-2 mx-1 hover:bg-gray-50"
      >
        <img
          src={`/less-than.png`}
          alt="calendar"
          className="flex justify-center align-middle items-center w-6 h-6"
        />
      </button>
      <button
        onClick={handleNextMonth}
        className="rounded-full p-2 mx-1 hover:bg-gray-50"
      >
        <img
          src={`/more-than.png`}
          alt="calendar"
          className="flex justify-center align-middle items-center w-6 h-6"
        />
      </button>
      <h2 className="ml-2 text-xl text-gray-500 font-bold">
        {props.selectedDate.toLocaleString("default", {
          year: "numeric",
          month: "long",
        })}
      </h2>
      {/* <motion.div className={``}>
        <Dropdown>
          <Dropdown.Button flat>Trigger</Dropdown.Button>
          <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
            {(item) => (
              <Dropdown.Item
                key={item.key}
                color={item.key === "delete" ? "error" : "default"}
              >
                {item.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </motion.div> */}
    </header>
  );
}
