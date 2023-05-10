import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";

type Props = {
  amenitiesList: any[];
};

export default function AmenityCard(props: Props) {
  const [viewMore, setViewMore] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <motion.div className={`relative w-full mb-4`}>
        <motion.div className={`pb-2`}>
          <h2 className={`text-gray-500 text-2xl font-semibold`}>Amenities</h2>
        </motion.div>
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`}
        >
          {props.amenitiesList.map(
            (amenity: any, index: number) =>
              (!viewMore
                ? index < Math.min(4, props.amenitiesList.length)
                : index < props.amenitiesList.length) && (
                <motion.div
                  key={amenity._id}
                  className={`relative flex align-middle items-center pb-4`}
                >
                  <div
                    className={`relative h-9 w-9 mr-2 flex rounded-full bg-gray-100`}
                  >
                    <Image
                      className={`rounded-full`}
                      src={amenity.image_Url}
                      alt="amenity-img"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={`text-lg text-left`}>{amenity.name}</div>
                </motion.div>
              )
          )}
          <motion.div className={`relative`}>
            {viewMore ? (
              <p
                className={`p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`}
                onClick={() => setViewMore(false)}
              >
                - Less
              </p>
            ) : (
              <p
                className={`p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`}
                onClick={() => setViewMore(true)}
              >
                + More
              </p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
