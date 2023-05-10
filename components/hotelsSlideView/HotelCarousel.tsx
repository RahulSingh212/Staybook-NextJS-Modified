import React from "react";
import Image from "next/image";
import { sanityClient, urlFor } from "@/sanity";

type Props = {
  hotelsList: any[];
};

export default function HotelCarousel(props: Props) {
  const [hotelIdx, setHotelIdx] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newIdx = (hotelIdx + Number(1)) % props.hotelsList.length;
      setHotelIdx(newIdx);
    }, 5000);

    return () => clearInterval(interval);
  }, [hotelIdx, props.hotelsList.length]);

  const selectHotelCardHandler = (selectedIndex: number) => {
    setHotelIdx(selectedIndex);
  };

  return (
    <React.Fragment>
      <div className={`flex flex-col w-screen mb-16`}>
        {/* <motion.div className={`flex justify-center items-center mt-5`}>
          <h1 className={`text-4xl sm:text-6xl `}>Our Hotels</h1>
        </motion.div> */}
        <div
          className={`relative w-screen h-full md:h-[700px] lg:h-[500px] flex flex-col md:flex-row justify-center items-center p-5`}
        >
          <div
            className={`relative flex flex-col items-center justify-center w-[80%] h-56 sm:w-[70%] sm:h-64 md:w-1/2 md:h-full`}
          >
            <div
              className={`relative z-20 w-[100%] h-[100%] md:w-[70%] md:h-[60%] lg:w-[75%] lg:h-[65%] mr-10 mb-10 md:mr-16 md:mb-16 lg:mr-28 lg:mb-24 rounded-lg`}
            >
              <Image
                src={urlFor(
                  props.hotelsList[hotelIdx].image_Url[0]
                ).url()}
                alt="icon"
                layout="fill"
                // objectFit="contain"
                objectPosition="center"
                className={`rounded-lg drop-shadow-xl`}
              />
            </div>
            <div
              className={`absolute z-10 w-[100%] h-[100%] md:w-[70%] md:h-[60%] lg:w-[75%] lg:h-[65%] ml-10 mt-10 md:ml-16 md:mt-16 lg:ml-28 lg:mt-24 rounded-lg`}
            >
              <Image
                src={urlFor(
                  props.hotelsList[hotelIdx].image_Url[1]
                ).url()}
                alt="icon"
                layout="fill"
                // objectFit="contain"
                objectPosition="center"
                className={`rounded-lg drop-shadow-xl`}
              />
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-[100%] md:w-[50%] h-[100%] mt-8`}
          >
            <div className={`py-5 px-2`}>
              <h1 className={`text-3xl sm:text-4xl text-center`}>
                {props.hotelsList[hotelIdx].hotel_Name}
              </h1>
            </div>
            <div className={`text-justify py-5 px-2 sm:px-5`}>
              {props.hotelsList[hotelIdx].description}
            </div>
          </div>
        </div>

        <div
          className={`relative flex flex-row items-center justify-center align-middle mb-5`}
        >
          {props.hotelsList.map((hotel: any, index: number) => (
            <div
              className={`flex flex-row items-center align-middle`}
              key={hotel._id}
            >
              {index === hotelIdx ? (
                <SelectedHotelRing hotel_Name={hotel.hotel_Name} />
              ) : (
                <HotelRing hotelIndex={index} setHotelIdx={setHotelIdx} hotel_Name={hotel.hotel_Name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const SelectedHotelRing = (props: any) => {
  return (
    <React.Fragment>
      <div className={`items-center`}>
        <div
          className={`border-2 border-red-600 z-1 bg-red-600 rounded-full mx-1 sm:mx-3 md:mx-4 cursor-pointer`}
        >
          <div className={`p-1 z-2 rounded-full bg-white`}>
            <div className={`items-center p-2 z-3 rounded-full bg-red-600`} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const HotelRing = (props: any) => {
  return (
    <React.Fragment>
      <div
        className={`items-center p-2 z-3 mx-1 sm:mx-3 md:mx-4 rounded-full bg-red-600 cursor-pointer`}
        onClick={(event) => props.setHotelIdx(props.hotelIndex)}
      />
    </React.Fragment>
  );
};
