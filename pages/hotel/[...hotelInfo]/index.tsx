import React from "react";
import { motion, motionValue } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";
import Link from "next/link";
import { format } from "date-fns";
import { addDays, getDateDifference } from "@/lib/helper";

import ImageGalleryCard from "@/components/imageGallery/ImageGalleryCard";
import AmenityCard from "@/components/hotel/AmenityCard/AmenityCard";
import DescriptionCard from "@/components/hotel/DescriptionCard/DescriptionCard";
import FullAmenityCard from "@/components/hotel/AmenityCard/FullAmenityCard";
import NearbyPlacesCard from "@/components/hotel/PlacesCard/NearbyPlacesCard";

import RoomsCard from "@/components/hotel/RoomsCard/RoomsCard";
import BookingCard from "@/components/hotel/BookingCard/BookingCard";

import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import { RoomDetails } from "@/classModels/bookings/roomDetails";

import { LocationMarkerIcon } from "@heroicons/react/solid";
import PaymentInformation from "@/components/hotel/PaymentInfo/PaymentInformation";

import PayOnHotelForm from "@/components/models/payOnHotelForm/PayOnHotelForm";
import LoadingModel from "@/components/models/Loading/LoadingModel";
import ErrorModel from "@/components/models/Error/ErrorModel";

type Props = {
  hotelInfo: any;
  checkin: any;
  checkout: any;
  num_nights: any;
  num_guests: any;
  hotel_id: any;
};

import Script from "next/script";
import Razorpay from "razorpay";
import { fetchUserPersonalDetails } from "@/lib/booking/bookingHandler";
import { MobileBookingCard } from "@/components/hotel/BookingCard/MobileBookingCard";

export default function HotelInformation(props: Props) {
  const [formVisibility, setFormVisibility] = React.useState<boolean>(false);
  const [bookingCardVisibility, setBookingCardVisibility] = React.useState<boolean>(false);
  const [loadingModelVisible, setLoadingModel] = React.useState<boolean>(false);

  const [errorModelVisible, setErrorModel] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  // const [Razorpay, setRazorpay] = React.useState<any>(null);

  // React.useEffect(() => {
  //   async function loadRazorpay() {
  //     const { default: Razorpay } = await import('razorpay');
  //     setRazorpay(Razorpay);
  //   }

  //   if (typeof window !== 'undefined') {
  //     loadRazorpay();
  //   }
  // }, []);

  const router = useRouter();
  const [userBooking, setUserBooking] = React.useState<BookingDetails>(
    new BookingDetails()
  );
  React.useEffect(() => {
    const bookingDetails = new BookingDetails();
    bookingDetails.hotel_Firebase_Id = props.hotelInfo.hotel_Firebase_Unique_Id;
    bookingDetails.hotel_Sanity_Id = props.hotelInfo._id;
    bookingDetails.hotel_Owner_Id = props.hotelInfo.hotel_Owner_Unique_Id;
    bookingDetails.hotel_Image_Url = props.hotelInfo.image_List[0];
    bookingDetails.hotel_Name = props.hotelInfo.name;
    bookingDetails.hotel_Landmark = props.hotelInfo.landmark;

    let rm = new RoomDetails();
    rm.room_Count = 1;
    rm.num_Guests = 2;
    rm.room_Name = props.hotelInfo.rooms[0].type;
    rm.room_Info = props.hotelInfo.rooms[0].info;
    rm.plan_Name = props.hotelInfo.rooms[0].plans[0].title;
    rm.plan_Info = props.hotelInfo.rooms[0].plans[0].info;
    rm.plan_Price = props.hotelInfo.rooms[0].plans[0].price;
    bookingDetails.roomsList.push(rm);
    setRoomCount(bookingDetails.total_Rooms_Count);
    setTotalRoomCost(bookingDetails.total_Room_Cost);
    setTotalTax(bookingDetails.total_Tax);
    setTotalPrice(bookingDetails.total_Price);
    setSelectedRoomsList(bookingDetails.roomsList);
    bookingDetails.updateBookingDetails();
    setUserBooking(bookingDetails);
  }, []);
  const [roomCount, setRoomCount] = React.useState<number>(userBooking.total_Rooms_Count);
  const [totalRoomCost, setTotalRoomCost] = React.useState<number>(userBooking.total_Room_Cost);
  const [totalTax, setTotalTax] = React.useState<number>(userBooking.total_Tax);
  const [totalPrice, setTotalPrice] = React.useState<number>(userBooking.total_Price);
  const [selectedRoomsList, setSelectedRoomsList] = React.useState<RoomDetails[]>();

  const roomSelectHandler = async () => {
    if (userBooking.roomsList.length === 0) {
      setErrorMessage("Please select a room before creating a booking!");
      setErrorModel(true);
      return;
    }
    const response = await fetchUserPersonalDetails(userBooking);
    userBooking.user_Name = response.user_Name;
    userBooking.user_Phone_Number = response.user_Phone_Number;
    userBooking.user_Email_Id = response.user_Email_Id;
    setUserBooking(userBooking);
    // console.log(response);
    setFormVisibility(true);
  };

  const hotelBookingHandler = async (event: any) => {
    const data = await hotelBookingHandler(userBooking);
    setLoadingModel(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>{props.hotelInfo.meta_title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={`w-screen scrollbar-hide`}>
        <LoadingModel
          modelVisible={loadingModelVisible}
          setLoadingModel={setLoadingModel}
        />
        <ErrorModel
          errorMsg={errorMessage}
          setErrorMessage={setErrorMessage}
          modelVisible={errorModelVisible}
          setErrorModel={setErrorModel}
        />
        <motion.div className={`relative w-screen flex flex-col mb-5`}>
          <ImageGalleryCard hotelImgList={props.hotelInfo.image_List} />
        </motion.div>

        <motion.div
          className={`relative w-[95%] h-full flex flex-col md:flex-row justify-between mx-auto mb-10`}
        >
          <motion.div className={`relative w-full md:w-[60%] scrollbar-hide`}>
            {/* Name */}
            <motion.div className={`w-full mb-4 text-justify`}>
              <h1 className={`text-5xl font-serif`}>{props.hotelInfo.name}</h1>
            </motion.div>

            {/* Address */}
            <motion.div
              className={`w-full flex mb-4 text-justify items-center align-middle`}
            >
              <Link
                target="_blank"
                href={props.hotelInfo.map}
                className={`cursor-pointer`}
              >
                <div
                  className={`p-2 rounded-full items-center align-middle hover:bg-slate-200 mr-2`}
                >
                  <LocationMarkerIcon
                    className={`relative fill-black h-7 w-7 rounded-full cursor-pointer`}
                  />
                </div>
              </Link>
              <p className={`text-xl font-light text-justify`}>
                {props.hotelInfo.address}
              </p>
            </motion.div>

            {/* Phone & Email Id */}
            <motion.div
              className={`w-full flex flex-col lg:flex-row justify-between mb-4 items-center align-middle`}
            >
              <motion.div
                className={`flex text-start items-center align-middle py-1`}
              >
                <p className={`font-semibold text-xl text-red-600`}>
                  PHONE:&nbsp;&nbsp;
                </p>
                <p className={`text-xl`}>{props.hotelInfo.phone}</p>
              </motion.div>
              <motion.div
                className={`flex text-start items-center align-middle py-1`}
              >
                <p className={`font-semibold text-xl text-red-600`}>
                  EMAIL:&nbsp;&nbsp;
                </p>
                <p className={`text-xl`}>{props.hotelInfo.email}</p>
              </motion.div>
            </motion.div>

            {/* Map Window */}
            <motion.div
              className={`rounded-3xl border-1 border-red-400 mb-4`}
            ></motion.div>

            {/* Amenities */}
            <AmenityCard amenitiesList={props.hotelInfo.amenities_List} />

            {/* Hotel Rooms */}
            <RoomsCard
              roomsList={props.hotelInfo.rooms}
              amenitiesList={props.hotelInfo.hotel_amenities}
              userBooking={userBooking}
              setRoomCount={setRoomCount}
              setTotalRoomCost={setTotalRoomCost}
              setTotalTax={setTotalTax}
              setTotalPrice={setTotalPrice}
            />

            {/* Description */}
            <motion.div className={`w-full mb-4 text-justify`}>
              <p className={`text-xl font-mono text-justify`}>
                {props.hotelInfo.description}
              </p>
            </motion.div>

            {/* Descriptions */}
            <DescriptionCard
              hotelDescriptionsList={props.hotelInfo.hotel_description}
            />

            {/* Hotel Amenities */}
            <FullAmenityCard aminityList={props.hotelInfo.hotel_amenities} />

            {/* Nearby Places */}
            <NearbyPlacesCard
              locationsList={props.hotelInfo.hotel_nearby_places}
            />
          </motion.div>

          {/* Booking Card */}
          <BookingCard
            userBooking={userBooking}
            setUserBooking={setUserBooking}
            setRoomCount={setRoomCount}
            setTotalRoomCost={setTotalRoomCost}
            setTotalTax={setTotalTax}
            setTotalPrice={setTotalPrice}
            roomSelectHandler={roomSelectHandler}
            hotelBookingHandler={hotelBookingHandler}
          />
        </motion.div>
        {(formVisibility && userBooking.roomsList.length) && (
          <PaymentInformation
            userBooking={userBooking}
            setUserBooking={setUserBooking}
            setErrorMessage={setErrorMessage}
            setErrorModel={setErrorModel}
            setLoadingModel={setLoadingModel}
          />
        )}
        <MobileBookingCard
          userBooking={userBooking}
          checkin={props.checkin}
          checkout={props.checkout}
        />
      </main>
    </React.Fragment>
  );
}

export async function getServerSideProps(context: any) {
  const { params, query, req, res } = await context;

  const slug_Name = params?.hotelInfo[0];
  const checkin = moment(query.checkin, "DD-MM-YYYY").toDate();
  const checkout = addDays(
    moment(query.checkin, "DD-MM-YYYY").toDate(),
    Number(query.num_nights)
  );
  const num_nights = query.num_nights;
  const num_guests = query.num_guests;
  const hotel_id = params.hotelInfo[params.hotelInfo.length - 1];

  const hotelInfoQuery = groq`
    *[_type == "hotel" && (slug.current == "${slug_Name}" || id == "${hotel_id}")] {
      _id,
      landmark,
      address,
      "hotel_Firebase_Unique_Id":hotel_firebase_Unique_Id,
      hotel_Owner_Unique_Id,
      "amenities_List":amenities[]->{
        _id,
        name,
        "image_Url":image.asset->url,
      },
      card_amenities,
      description,
      email,
      hotel_amenities[],
      hotel_description[],
      hotel_nearby_places[]{
        "map_Url":nearby_place_link,
        "name":nearby_place_name,
      },
      id,
      "image_List":images[].asset->url,
      map,
      meta_desc,
      meta_title,
      name,
      phone,
      rooms[guests == ${num_guests}] | order(plan[].price asc) {
        "image_List": images[].asset->url,
        _key,
        info,
        ameneties,
        guests,
        type,
        plans[],
      },
      "slug_Name": slug.current,
    }
  `;

  let hotelInfo: any[] = await sanityClient.fetch(hotelInfoQuery);

  return {
    props: {
      hotelInfo: hotelInfo[0],
      checkin: String(moment(query.checkin, "DD-MM-YYYY").toDate()),
      checkout: String(
        addDays(
          moment(query.checkin, "DD-MM-YYYY").toDate(),
          Number(query.num_nights)
        )
      ),
      num_nights: num_nights,
      num_guests: num_guests,
      hotel_id: hotel_id,
    },
  };
}
