import React from "react";
import { motion, motionValue, useAnimation } from "framer-motion";
import Image from "next/image";
import { sanityClient, urlFor } from "@/sanity";
import { useRouter } from "next/router";

type Props = {
  hotelRegion: any;
};

export default function RegionCard(props: Props) {
  const router = useRouter();
  const showRegionHotelsHandler = () => {
    router.push({
      pathname: `/region/${props.hotelRegion.slug_Name}`,
      // query: {},
    });
  }

  return (
    <React.Fragment>
      <motion.div onClick={showRegionHotelsHandler}
        className={`relative w-[98%] h-[400px] md:w-[600px] md:h-[450px] flex-shrink-0 flex flex-col items-center align-middle p-4 rounded-3xl bg-gray-100 hover:bg-red-100 cursor-pointer`}
      >
        <motion.div className={`relative w-full h-full mb-8`}>
          <Image
            src={urlFor(props.hotelRegion.image_Url).url()}
            alt="icon"
            layout="fill"
            // objectFit="contain"
            objectPosition="center"
            className={`rounded-3xl shadow-lg w-fit h-fill`}
          />
        </motion.div>
        <motion.div>
          <h2 className={`text-center text-2xl text-[#6d6d6d]`}>
            {props.hotelRegion.name}
          </h2>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
