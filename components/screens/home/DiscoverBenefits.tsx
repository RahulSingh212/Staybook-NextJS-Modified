import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import AmenityCard from "@/components/widgets/AmenityCard";

type Props = {};

export default function DiscoverBenefits(props: Props) {
  const amenitiesList: any[] = [
    {
      _id: "0",
      idx: 0,
      name: "Parking",
      image_Src: "/images/staybookAmenities/parking.svg",
    },
    {
      _id: "1",
      idx: 1,
      name: "Room Service",
      image_Src: "/images/staybookAmenities/room-service.svg",
    },
    {
      _id: "2",
      idx: 2,
      name: "Tour",
      image_Src: "/images/staybookAmenities/tour.svg",
    },
    {
      _id: "3",
      idx: 3,
      name: "Breakfast",
      image_Src: "/images/staybookAmenities/breakfast.svg",
    },
    {
      _id: "4",
      idx: 4,
      name: "Concierge",
      image_Src: "/images/staybookAmenities/concierge.svg",
    },
    {
      _id: "5",
      idx: 5,
      name: "Internet or Wi-Fi",
      image_Src: "/images/staybookAmenities/wifi.svg",
    },
  ];
  return (
    <React.Fragment>
      <motion.div
        className={`relative flex flex-col items-center align-middle w-screen mb-16`}
      >
        <motion.div
          className={`flex flex-col justify-center items-center align-middle pb-4`}
        >
          <motion.h1
            initial={{ opacity: 0.0, y: 30 }}
            transition={{ duration: 2.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl sm:text-7xl md:text-8xl text-center px-5`}
          >
            Discover Benefits
          </motion.h1>
        </motion.div>
        <motion.div className={`flex flex-col py-2`}>
          <motion.p
            initial={{ opacity: 0.0, y: 40 }}
            transition={{ duration: 3.0, type: "spring" }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-center text-[20px] text-red-500 px-5`}
          >
            Discover our wide range of amenites available in our hotels.
          </motion.p>
        </motion.div>
        <motion.div
          className={`relative w-[90%] flex space-x-8 overflow-x-scroll my-2 scrollbar-hide`}
        >
          {/* <AmenityCard amenityDetail={props.amenitiesList[0]}/>
            <AmenityCard amenityDetail={props.amenitiesList[1]}/> */}
          {amenitiesList.map((amenity) => (
            <AmenityCard key={amenity._id} amenityDetail={amenity} />
          ))}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
