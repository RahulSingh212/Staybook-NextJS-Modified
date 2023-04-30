import React from "react";
import { motion, motionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  planInfo: any;
  planIndex: number;

  roomCount: number;
  totalRoomCost: number;
  totalTax: number;
  totalPrice: number;
  setRoomCount: Function;
  setTotalRoomCost: Function;
  setTotalTax: Function;
  setTotalPrice: Function;

  selectedRoomsList: any[];
  setSelectedRoomsList: Function;
};

export default function BookingPriceCard(props: Props) {

  const removeHotelPlan = () => {
    let tot = 0;
    let list = [];
    for (let i = 0; i < props.selectedRoomsList.length; i++) {
      if (i === props.planIndex) continue;
      tot += Number(props.selectedRoomsList[i].plan_Price);
      tot += Number(props.selectedRoomsList[i].num_children) * 1000;
      list.push(props.selectedRoomsList[i]);
    }

    props.setRoomCount(list.length);
    props.setTotalRoomCost(tot);
    props.setTotalTax(tot * 0.12);
    props.setTotalPrice(tot * 1.12);
    props.setSelectedRoomsList(list);
  };

  const addChildToPlan = (event:any) => {
    let val = Number(event.target.value);
    console.log(val);
    if (val == 0) {

    }
    else {

    }
    // let tot = 0;
    // let list = [];
    // for (let i = 0; i < props.selectedRoomsList.length; i++) {
    //   if (i === props.planIndex) continue;
    //   tot += Number(props.selectedRoomsList[i].plan_Price);
    //   tot += Number(props.selectedRoomsList[i].num_children) * 1000;
    //   list.push(props.selectedRoomsList[i]);
    // }

    // props.setRoomCount(list.length);
    // props.setTotalRoomCost(tot);
    // props.setTotalTax(tot * 0.12);
    // props.setTotalPrice(tot * 1.12);
    // props.setSelectedRoomsList(list);
  };

  return (
    <React.Fragment>
      <motion.div
        className={`relative w-[95%] flex flex-col rounded-md shadow-md px-3 py-2 mb-2`}
      >
        <motion.div className={`relative flex flex-row justify-between mb-2`}>
          <motion.div className={`relative w-[92.5%]`}>
            <h2 className={`text-md font-mono`}>{props.planInfo.plan_Nmae}</h2>
          </motion.div>
          <motion.div
            onClick={removeHotelPlan}
            className={`relative h-6 w-6 cursor-pointer rounded-full bg-slate-200 hover:bg-slate-400`}
          >
            <Image
              className={`rounded-lg p-1 h-2 w-2`}
              src={`/close.png`}
              alt="amenity-img"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
        <motion.div className={`relative flex flex-row justify-between align-middle items-center`}>
          <motion.div className={`relative flex flex-row align-middle items-center`}>
            <motion.div className={``}>
              <p className={`text-lg text-gray-400 font-medium`}>Child</p>
            </motion.div>
            <motion.div className={`ml-4`}>
              <select
                className={`relative h-full px-3 py-2 border-2 border-red-400 rounded-md`}
                onChange={addChildToPlan}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </motion.div>
          </motion.div>
          <motion.div className={``}>
            <p className={`text-lg text-gray-400 font-medium`}>1 Room</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
