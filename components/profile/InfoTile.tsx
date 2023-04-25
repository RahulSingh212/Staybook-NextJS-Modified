import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";
import { doc, onSnapshot } from "firebase/firestore";

type Props = {
  firebaseHeaderName: string;
  headerText: string;
  tileText: string;
  descriptionText: string;
  placeHolderText: string;
  inputType: string;
};

export const updateProfileDetailsHandler = async (
  header: string,
  value: string
) => {
  const response = await fetch("/api/userProfile/updateUserDetails", {
    method: "POST",
    body: JSON.stringify({
      updateType: "",
      headerValue1: header,
      textValue1: value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  // console.log(data);
  return data;
};

export default function InfoTile(props: Props) {
  const [editBtn, setEditBtn] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>(props.tileText);

  const saveTextHandler = async () => {
    const responseData = await updateProfileDetailsHandler(
      props.firebaseHeaderName,
      inputValue
    );
    setEditBtn(false);
  };

  return (
    <React.Fragment>
      <motion.div className={`relative flex flex-col w-full`}>
        <motion.div
          className={`realtive flex flex-row justify-between mb-1 align-middle `}
        >
          <motion.div
            className={`relative flex justify-center align-middle items-center text-left text-xl font-sans`}
          >
            {props.headerText}
          </motion.div>
          <motion.div
            onClick={() => {
              setEditBtn(!editBtn);
            }}
            className={`relative flex items-center p-1 rounded-3xl bg-slate-400 ${
              editBtn ? `px-3` : "px-5"
            } py-1 text-white cursor-pointer text-sm font-medium`}
          >
            {editBtn ? "Cancel" : inputValue.length === 0 ? "Add" : "Edit"}
          </motion.div>
        </motion.div>
        {!editBtn && (
          <motion.div className={`text-lg text-gray-500`}>
            {inputValue.length === 0 ? "✹ Not provided ✹" : inputValue}
          </motion.div>
        )}
        {editBtn && (
          <motion.div className={`relative flex flex-col w-full`}>
            <motion.div
              className={`relative flex text-md text-gray-500 font-light`}
            >
              {props.descriptionText}
            </motion.div>
            <motion.div className={`relative flex my-6`}>
              <input
                className={`py-4 px-3 rounded-lg border border-gray-400 text-lg w-full md:w-[80%] xl:[60%]`}
                type={props.inputType}
                name="email"
                placeholder={props.placeHolderText}
                value={inputValue}
                onChange={(val) => {
                  setInputValue(val.target.value);
                }}
              />
            </motion.div>
            <motion.div
              onClick={saveTextHandler}
              className={`relative flex w-fit py-2 px-7 rounded-lg bg-black text-white font-medium text-lg cursor-pointer`}
            >
              Save
            </motion.div>
          </motion.div>
        )}
        <div className={`mt-8 border-[1px] bg-gray-300`} />
      </motion.div>
    </React.Fragment>
  );
}
