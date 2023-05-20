import React from "react";
import RegionCard from "../widgets/RegionCard";

type Props = {
  hotelRegionsList: any[];
};

const boxVariant = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, translateX: "15" },
};

export default function HotelRegions(props: Props) {
  const [hotelRegionIdx, setHotelRegionIdx] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newIdx =
        (hotelRegionIdx + Number(1)) % props.hotelRegionsList.length;
      setHotelRegionIdx(newIdx);
    }, 5000);

    return () => clearInterval(interval);
  }, [hotelRegionIdx, props.hotelRegionsList.length]);

  const selectHotelRegionCardHandler = (selectedIndex: number) => {
    setHotelRegionIdx(selectedIndex);
  };

  return (
    <React.Fragment>
      <div
        className={`relative flex flex-col justify-evenly items-center align-middle mx-w-full mb-16`}
      >
        <div
          className={`flex flex-col justify-center items-center align-middle pb-4`}
        >
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl text-center px-5 font-serif`}
          >
            Hotel Regions
          </h1>
        </div>
        <div
          className={`relative w-[90%] flex space-x-8 overflow-x-scroll my-2 scrollbar-hide no-scrollbar`}
        >
          {props.hotelRegionsList.map((hr) => (
            <RegionCard key={hr._id} hotelRegion={hr} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
