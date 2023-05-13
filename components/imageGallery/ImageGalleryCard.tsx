import React from "react";
import { motion, motionValue } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import GalleryView from "../UI/GalleryView";
import { FullScreenImageView } from "../UI/FullScreenImageView";

type Props = {
  hotelImgList: any[];
};

export default function ImageGalleryCard(props: Props) {
  const router = useRouter();
  const [galleryView, setGalleryView] = React.useState<boolean>(false);

  const galleryHandler = () => {
    setGalleryView(false);
  };

  return (
    <React.Fragment>
      {/* {galleryView && (
        <GalleryView hotelImgList={props.hotelImgList} closeGalleryView={galleryHandler} />
      )} */}
      {galleryView && (
        <FullScreenImageView imageList={props.hotelImgList} onClose={galleryHandler} />
      )}
      <motion.div
        className={`relative w-[95%] h-[275px] sm:h-[350px] md:h-[425px] lg:h-[500px] xl:h-[550px] flex flex-row items-center align-middle justify-between z-20 rounded-3xl mx-auto my-5`}
      >
        <motion.div
          className={`relative flex w-[75%] lg:w-[49%] h-full rounded-l-3xl`}
        >
          <Image
            className={`relative rounded-l-3xl`}
            src={props.hotelImgList[0]}
            alt="hotel-img"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          className={`relative flex flex-col justify-between w-[24.5%] lg:w-[50.5%] h-full rounded-r-3xl`}
        >
          <motion.div
            className={`relative flex flex-col lg:flex-row w-full h-[49.25%] rounded-tr-3xl items-center justify-between`}
          >
            <motion.div
              className={`relative flex w-full lg:w-[49.5%] h-full rounded-tr-3xl lg:rounded-tr-none`}
            >
              <Image
                className={`relative rounded-tr-3xl lg:rounded-tr-none`}
                src={props.hotelImgList[1]}
                alt="hotel-img"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <div className={`h-1 sm:h-2 lg:h-0`}></div>
            <motion.div
              className={`relative flex w-full lg:w-[49.5%] rounded-tr-none lg:rounded-tr-3xl h-full`}
            >
              <Image
                className={`relative rounded-tr-none lg:rounded-tr-3xl`}
                src={props.hotelImgList[2]}
                alt="hotel-img"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className={`relative flex flex-col lg:flex-row w-full h-[49.25%] rounded-br-3xl items-center justify-between`}
          >
            <motion.div className={`relative flex w-full lg:w-[49.5%] h-full`}>
              <Image
                className={`relative`}
                src={props.hotelImgList[3]}
                alt="hotel-img"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <div className={`h-1 sm:h-2 lg:h-0`}></div>
            <motion.div
              className={`relative flex w-full lg:w-[49.5%] rounded-br-3xl h-full`}
            >
              <Image
                className={`relative rounded-br-3xl`}
                src={props.hotelImgList[4]}
                alt="hotel-img"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className={`absolute h-full w-full flex justify-end items-end`}
        >
          <motion.div
            className={`relative bottom-0 text-center text-white rounded-full p-3 md:p-5 bg-[#cf8f24] cursor-pointer mb-3 mr-3 opacity-80 hover:opacity-90 shadow-lg`}
          >
            <p
              className={`text-center text-xs md:text-base font-semibold rounded-full`}
              onClick={() => setGalleryView(!galleryView)}
            >
              Open
              <br />
              Gallery
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
