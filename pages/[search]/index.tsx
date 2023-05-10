import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import moment from "moment";
import { format } from "date-fns";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import HotelCard from "@/components/screens/hotel/HotelCard";
import { NULL } from "sass";

type Props = {
  hotelsList: any[];
};

export default function Search(props: Props) {
  const router = useRouter();
  // console.log(router);
  // console.log(router.query);
  // console.log(moment(router.query['checkin'], 'DD-MM-YYYY').toDate())

  return (
    <React.Fragment>
      <Head>
        <title>StayBook Hotels</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={`flex flex-col`}>
        <section className={`flex flex-col px-2 md:px-5 xl:px-10 py-5`}>
          {/* <p className={`text-lg`}>
            Showing results for &quot;{router.query["q"]}&quot;
          </p> */}
          <p className={`text-sm`}>
            {/* {String(format(moment(router.query.checkin, 'DD-MM-YYYY').toDate(), "dd MMMMM yy"))} - {String(format(moment(router.query.checkout, 'DD-MM-YYYY').toDate(), "dd MMMMM yy"))}, for{" "} */}
            {format(
              moment(router.query.checkin, "DD-MM-YYYY").toDate(),
              "dd MMMM yy"
            )}{" "}
            -{" "}
            {format(
              moment(router.query.checkout, "DD-MM-YYYY").toDate(),
              "dd MMMM yy"
            )}
            , for {router.query["num_guests"]} guests -{" "}
            {Number(router.query["num_nights"])} nights
          </p>
          {/* <h1 className={`text-3xl font-semibold`}>Stays in Delhi</h1> */}
        </section>

        {!props.hotelsList ? (
          <motion.div
            className={`relative w-screen px-10 h-60 flex items-center justify-center`}
          >
            <p className={`text-center`}>Loading...</p>
          </motion.div>
        ) : props.hotelsList.length === 0 ? (
          <motion.div
            className={`relative w-screen px-10 h-60 flex items-center justify-center`}
          >
            <p className={`text-center`}>
              No results available for your search
            </p>
          </motion.div>
        ) : (
          <motion.div className={`relative flex flex-col`}>
            {props.hotelsList.map((hotel: any, index: number) => (
              <HotelCard
                key={hotel._id}
                hotelInfo={hotel}
                hotel_Id={hotel.hotel_Id}
                checkin={moment(router.query.checkin, "DD-MM-YYYY").toDate()}
                checkout={moment(router.query.checkout, "DD-MM-YYYY").toDate()}
                num_nights={Number(router.query.num_nights)}
                num_guests={Number(router.query.num_guests)}
              />
            ))}
          </motion.div>
        )}
      </main>
    </React.Fragment>
  );
}

export async function getServerSideProps(context: any) {
  // context.res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  const { params, query, req, res } = await context;

  const searchedText = await query.q;
  const checkInDate = await query.checkin;
  const checkOutDate = await query.checkout;
  const num_nights = await query.num_nights;
  const num_guests = await query.num_guests;

  // (landmark match "${searchedText}" || name match "${searchedText}" || address match ${searchedText} || description match ${searchedText})
  const hotelsListQuery = groq`
    *[_type == "hotel" && (address match "${searchedText}" || name match "${searchedText}") && count(rooms[guests == ${num_guests}]) > 0] | order(order asc) {
      _id,
      "hotel_Id": id,
      landmark,
      card_amenities,
      "slug_Name": slug.current,
      "amenities_List":card_amenities_ref[]->{
        _id,
        name,
        "image_Url":image.asset->url,
      },
      "hotel_Img_List":images[].asset->url,
      // longitude, latitude,
      map,
      name,
      rating,
      // "min_Price":rooms[][0...1].plans[][0...1].price,
      // "num_Of_Plans":count(rooms[].plans[].price),
      "min_Price":rooms[guests == ${num_guests}].plans[][0...1].price | order(price asc)[0],
      "num_Of_Plans":count(rooms[guests == ${num_guests}].plans[].price),
    }
  `;

  let hotelsList: any[] = await sanityClient.fetch(hotelsListQuery);

  // if (hotelsList.length === 0) {
  //   const fetchAllHotelsQuery = groq`
  //     *[_type == "hotel"] | order(order asc) {
  //       _id,
  //       "hotel_Id": id,
  //       landmark,
  //       card_amenities,
  //       "slug_Name": slug.current,
  //       "amenities_List":card_amenities_ref[]->{
  //         _id,
  //         name,
  //         "image_Url":image.asset->url,
  //       },
  //       "hotel_Img_List":images[].asset->url,
  //       longitude, latitude,
  //       map,
  //       name,
  //       rating,
  //       "min_Price":rooms[][0...1].plans[][0...1].price,
  //       "num_Of_Plans":count(rooms[].plans[].price),
  //     }
  //   `;
  //   hotelsList = await sanityClient.fetch(fetchAllHotelsQuery);
  // }

  return {
    props: {
      hotelsList,
    },
  };
}
