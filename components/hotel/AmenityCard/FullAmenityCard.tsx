import React from "react";
import { motion, motionValue } from "framer-motion";
import Image from "next/image";

type Props = {
  aminityList: any[];
};

export default function FullAmenityCard(props: Props) {
  const [viewMore, setViewMore] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <motion.div className={`relative w-full mb-4`}>
        <motion.div className={`pb-2`}>
          <h2 className={`text-gray-500 text-2xl font-semibold`}>Hotel Amenities</h2>
        </motion.div>
        <motion.div
          className={`grid grid-cols-2 xl:grid-cols-3`}
        >
          {props?.aminityList?.map(
            (amenity: any, index: number) =>
              (!viewMore
                ? index < Math.min(8, props.aminityList.length)
                : index < props.aminityList.length) && (
                <motion.div
                  key={String(index)}
                  className={`relative flex align-middle items-center pb-4`}
                >
                  <div
                    className={`relative h-7 w-7 mr-2 flex rounded-full bg-gray-100`}
                  >
                    <Image
                      className={`rounded-full p-1`}
                      src={`/correct.png`}
                      alt="amenity-img"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={`text-xs md:text-base text-left`}>{amenity}</div>
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
