import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";

type Props = {
  locationsList: any[];
};

export default function NearbyPlacesCard(props: Props) {
  const [viewMore, setViewMore] = React.useState<boolean>(true);

  return (
    <React.Fragment>
      <motion.div className={`relative w-full mb-4`}>
        <motion.div className={`pb-2`}>
          <h2 className={`text-gray-500 text-2xl font-semibold`}>
            Nearby Places
          </h2>
        </motion.div>
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`}
        >
          {props.locationsList.map(
            (location: any, index: number) =>
              (!viewMore
                ? index < Math.min(8, props.locationsList.length)
                : index < props.locationsList.length) && (
                <a target="_blank" href={location.map_Url} key={String(index)}>
                  <motion.div
                    className={`relative flex align-middle items-center pb-4`}
                  >
                    <div
                      className={`relative h-8 w-8 mr-2 flex rounded-full bg-gray-100`}
                    >
                      <Image
                        className={`rounded-full`}
                        src={`/map-pin.png`}
                        alt="amenity-img"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={`text-base text-left`}>{location.name}</div>
                  </motion.div>
                </a>
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
