import React from "react";
import { motion, motionValue } from "framer-motion";
import Image from "next/image";

import {
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  FolderOpenIcon,
} from "@heroicons/react/solid";

type Props = {
  imageList: any[];
  onClose: any;
};

export const FullScreenImageView = (props: Props) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };

    if (ref.current) {
      ref.current.requestFullscreen().catch((error) => {
        console.log(
          "Error attempting to enable full-screen mode:",
          error.message
        );
      });
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, [props]);

  const previousImageHandler = (event: any) => {
    event.stopPropagation();
    if (imageIndex === 0) {
      setImageIndex(props.imageList.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const nextImageHandler = (event: any) => {
    event.stopPropagation();
    setImageIndex((imageIndex + 1) % props.imageList.length);
  };

  return (
    <React.Fragment>
      <motion.div
        ref={ref}
        className={`fixed flex flex-col justify-center align-middle items-center left-0 top-0 w-screen h-screen z-50 bg-black no-scrollbar`}
      >
        <Image
          onClick={props.onClose}
          className={`absolute top-2 right-2  rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:bg-[#c4c2c2] z-40`}
          src={`/close.png`}
          alt="amenity-img"
          height={27.5}
          width={27.5}
        />
        <ArrowSmLeftIcon
          onClick={previousImageHandler}
          className={`absolute left-2 h-8 w-8 md:h-16 md:w-16 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
        />
        <ArrowSmRightIcon
          onClick={nextImageHandler}
          className={`absolute right-2 h-8 w-8 md:h-16 md:w-16 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`}
        />
        <div className="relative w-[80%] h-[80%]">
          <Image
            className={`h-full w-full`}
            src={props.imageList[imageIndex]}
            alt="h-img"
            layout="responsive"
            objectFit="cover"
            height={10}
            width={10}
          />
        </div>
        <div
          className={`relative flex align-middle justify-center items-center my-2 w-full h-16 px-2 space-x-2 no-scrollbar`}
        >
          {props.imageList.map((imgUrl: string, index: number) => (
            <div key={index} className={`h-full w-20`}>
              <Image
                onClick={() => {
                  setImageIndex(index);
                }}
                className={`cursor-pointer shadow-lg ${
                  index === imageIndex ? "border-4 border-blue-700" : ""
                }`}
                src={imgUrl}
                alt="h-img"
                layout="responsive"
                objectFit="cover"
                height={10}
                width={10}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </React.Fragment>
  );
};
