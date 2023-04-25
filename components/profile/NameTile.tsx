import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { USER_UPDATE_TYPE_NAME, extractJWTValues } from "@/lib/helper";
import { useRouter } from "next/router";

type Props = {
  headerText: string;
  firstNameplaceHolderText: string;
  firstText: string;
  middleNameplaceHolderText: string;
  middleText: string;
  lastNameplaceHolderText: string;
  lastText: string;
  descriptionText: string;
  inputType: string;
};

export const updateProfileDetailsHandler = async (
  headerValue1: string,
  textValue1: string,
  headerValue2: string,
  textValue2: string,
  headerValue3: string,
  textValue3: string
) => {
  const response = await fetch("/api/userProfile/updateUserDetails", {
    method: "POST",
    body: JSON.stringify({
      updateType: USER_UPDATE_TYPE_NAME,
      headerValue1: headerValue1,
      textValue1: textValue1,
      headerValue2: headerValue2,
      textValue2: textValue2,
      headerValue3: headerValue3,
      textValue3: textValue3,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  // console.log(data);
  return data;
};

export default function NameTile(props: Props) {
  const [editBtn, setEditBtn] = React.useState<boolean>(false);
  const [textValue1, setTextValue1] = React.useState<string>(props.firstText);
  const [textValue2, setTextValue2] = React.useState<string>(props.middleText);
  const [textValue3, setTextValue3] = React.useState<string>(props.lastText);

  const saveTextHandler = async () => {
    const responseData = await updateProfileDetailsHandler(
      "User_First_Name",
      textValue1,
      "User_Middle_Name",
      textValue2,
      "User_Last_Name",
      textValue3
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
            className={`relative flex items-center p-1 rounded-3xl bg-slate-400  ${
              editBtn ? `px-3` : "px-5"
            } py-1 text-white cursor-pointer text-sm font-medium`}
          >
            {editBtn
              ? "Cancel"
              : textValue1.length === 0 &&
                textValue2.length === 0 &&
                textValue3.length === 0
              ? "Add"
              : "Edit"}
          </motion.div>
        </motion.div>
        {!editBtn && (
          <motion.div className={`text-lg text-gray-500`}>
            {textValue1.length === 0 &&
            textValue2.length === 0 &&
            textValue3.length === 0
              ? "✹ Not provided ✹"
              : `${textValue1} ${textValue2} ${textValue3}`}
          </motion.div>
        )}
        {editBtn && (
          <motion.div className={`relative flex flex-col w-full`}>
            <motion.div
              className={`relative flex text-md text-gray-500 font-light w-full`}
            >
              {props.descriptionText}
            </motion.div>
            <motion.div
              className={`relative flex flex-col md:flex-row my-6 justify-between w-full md:w-[80%] xl:[60%]`}
            >
              <motion.div className={`relative md:w-[32%]`}>
                <input
                  className={`py-4 px-3 rounded-lg border border-gray-400 text-lg w-full mb-2 md:mb-0`}
                  type={props.inputType}
                  name="name"
                  placeholder={props.firstNameplaceHolderText}
                  value={textValue1}
                  onChange={(val) => {
                    setTextValue1(val.target.value);
                  }}
                />
              </motion.div>
              <motion.div className={`relative md:w-[32%]`}>
                <input
                  className={`py-4 px-3 rounded-lg border border-gray-400 text-lg w-full mb-2 md:mb-0`}
                  type={props.inputType}
                  name="name"
                  placeholder={props.middleNameplaceHolderText}
                  value={textValue2}
                  onChange={(val) => {
                    setTextValue2(val.target.value);
                  }}
                />
              </motion.div>
              <motion.div className={`relative md:w-[32%]`}>
                <input
                  className={`py-4 px-3 rounded-lg border border-gray-400 text-lg w-full`}
                  type={props.inputType}
                  name="name"
                  placeholder={props.lastNameplaceHolderText}
                  value={textValue3}
                  onChange={(val) => {
                    setTextValue3(val.target.value);
                  }}
                />
              </motion.div>
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
