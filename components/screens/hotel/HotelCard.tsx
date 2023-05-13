import React from "react";
import { motion, motionValue } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "@heroicons/react/solid";

type Props = {
  hotel_Id: string;
  checkin: Date;
  checkout: Date;
  num_nights: number;
  num_guests: number;
  hotelInfo: any;
};

export default function HotelCard(props: Props) {
  const router = useRouter();
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const previousImageHandler = (event: any) => {
    event.stopPropagation();
    if (imageIndex === 0) {
      setImageIndex(props.hotelInfo.hotel_Img_List.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const nextImageHandler = (event: any) => {
    event.stopPropagation();
    setImageIndex((imageIndex + 1) % props.hotelInfo.hotel_Img_List.length);
  };

  const bookHotelHandler = () => {
    router.push({
      pathname: `/hotel/google/list/${props.hotel_Id}/`,
      query: {
        checkin: String(moment(props.checkin).format("DD-MM-YYYY")),
        num_nights: String(props.num_nights),
        num_guests: String(props.num_guests),
        hotel_id: String(props.hotel_Id),
      },
    });
  };

  return (
    <React.Fragment>
      <motion.div
        onClick={bookHotelHandler}
        className={`relative flex flex-col sm:flex-row mx-2 md:mx-4 xl:mx-8 my-2 p-3 rounded-2xl bg-white shadow-md hover:shadow-lg cursor-pointer`}
      >
        <motion.div
          className={`relative flex flex-row h-72 w-[100%] sm:h-80 sm:w-[45%] md:h-80 md:w-[40%] lg:h-72 lg:w-96 xl:h-80 xl:w-[480px] flex-shrink-0 mr-2 md:mr-4 xl:mr-6`}
        >
          <motion.div
            onClick={bookHotelHandler}
            initial={{ opacity: 0.5 }}
            transition={{ duration: 1.0, type: "spring" }}
            whileHover={{ opacity: 1 }}
            className={`absolute flex flex-row items-center align-middle h-full justify-between w-full z-20 px-2`}
          >
            <div
              className={`cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30`}
              onClick={previousImageHandler}
            >
              <ArrowLeftIcon
                className={`fill-black h-7 w-7 p-1 rounded-full`}
              />
            </div>
            <div
              className={`cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30`}
              onClick={nextImageHandler}
            >
              <ArrowRightIcon
                className={`fill-black h-7 w-7 p-1 rounded-full`}
              />
            </div>
          </motion.div>
          <Image
            className={`rounded-lg z-10 shadow-md`}
            src={props.hotelInfo.hotel_Img_List[imageIndex]}
            alt="hotel-img"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, x: 25 }}
          transition={{ duration: 3.0, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`relative flex flex-col justify-between sm:pr-2 w-full sm:w-[55%] md:w-[60%] lg:w-[70%] xl:w-[75%]`}
        >
          <div className={`pb-4 pt-4 sm:pt-0`}>
            <div className={`flex flex-row flex-between`}>
              <h1
                className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold`}
              >
                {props.hotelInfo.name}
              </h1>
            </div>
            <div
              className={`relative flex flex-row py-1 hover:underline hover:text-blue-600`}
            >
              <LocationMarkerIcon
                className={`relative fill-[#cf8f24] h-7 w-7 p-1 border-2 border-[#cf8f24] rounded-full mr-2`}
              />
              <Link href={props.hotelInfo.map} className={`z-30`}>
                <p className={`md:text-lg xl:text-xl`}>
                  {props.hotelInfo.landmark}
                </p>
              </Link>
            </div>
          </div>

          <div className={`relative flex flex-col pb-4`}>
            <div
              className={`relative flex flex-col sm:flex-row justify-between items-start w-[100%] mb-2`}
            >
              <div className={`relative items-center flex`}>
                <StarIcon
                  className={`h-6 w-6 bg-slate-100 rounded-full p-1 mr-2 shadow-md`}
                />
                <p
                  className={`text-lg text-gray-500`}
                >{` ${props.hotelInfo.rating.toFixed(1)}`}</p>
                {/* <p className={`text-xs md:text-sm text-gray-500`}>
                  {`Available Plans: `}&nbsp;
                </p>
                <p
                  className={`text-lg text-gray-500`}
                >{` ${props.hotelInfo.num_Of_Plans}`}</p> */}
              </div>

              <div className={`relative flex`}>
                {/* <p className={`pr-2`}>Locate on Map: </p>
                <Link
                  target="_blank"
                  href={props.hotelInfo.map}
                  className={`cursor-pointer`}
                >
                  <LocationMarkerIcon
                    className={`relative fill-red-900 h-7 w-7 p-1 border-2 border-red-900 rounded-full`}
                  />
                </Link> */}
              </div>
            </div>

            <motion.div
              className={`relative flex flex-row justify-between flex-wrap w-full`}
            >
              {props.hotelInfo.amenities_List.map(
                (amenity: any, index: number) => (
                  <motion.div
                    key={amenity._id}
                    className={`relative flex flex-row items-start align-middle justify-center rounded-full flex-shrink-0 px-2 py-1 bg-white shadow-5xl border-2 scrollbar-hide mb-1`}
                  >
                    <div className={`relative h-5 w-5 mr-2 flex rounded-full`}>
                      <Image
                        className={`rounded-full`}
                        src={amenity.image_Url}
                        alt="amenity-img"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={`text-sm text-center`}>{amenity.name}</div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          <div
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center`}
          >
            <div className={`flex flex-col pb-4 sm:pb-0 justify-center`}>
              <p
                className={`text-[#cf8f24] text-3xl font-bold`}
              >{`₹ ${props.hotelInfo.min_Price}`}</p>
              <p className={`text-sm text-gray-500`}>{`per room per night`}</p>
            </div>

            {/* <div
              onClick={bookHotelHandler}
              className={`relative w-full sm:w-fit text-center px-4 py-2 rounded-lg bg-[#cf8f24] cursor-pointer hover:shadow-md`}
            >
              <p className={`text-gray-200 font-medium`}>Book Now</p>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
