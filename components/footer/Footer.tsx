import React, { useEffect, useState } from "react";
import classes from "./Footer.module.scss";
import moment from "moment";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  const pageHandler = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const hotelUrlHandler = (hotelId: string) => {
    router.push({
      pathname: `/hotel/google/list/${hotelId}/`,
      query: {
        checkin: String(moment(new Date()).format("DD-MM-YYYY")),
        num_nights: String(1),
        num_guests: String(2),
        hotel_id: String(hotelId),
      },
    });
  };

  const [data, setData] = useState<any[]>([
    {
      name: "Hotel Aira Xing by Staybook",
      hotelId: `24669`,
    },
    { name: "Staybook Jyoti Mahal A Heritage Hotel", hotelId: "25095" },
    {
      name: "Staybook Hotel Jai Balaji New Delhi Train Station",
      hotelId: "23690",
    },
    { name: "Staybook Hotel Pinky Villa", hotelId: "23540" },
    { name: "Staybook Atlanta New Delhi Train Station", hotelId: "24712" },
    { name: "Staybook WoodsView Mall Road Mussorie", hotelId: "12348" },
    { name: "Staybook Shivdev New Delhi Railway Station", hotelId: "" },
    { name: "Staybook BlueSky Camp, Manali", hotelId: "12347" },
    { name: "Staybook@South Delhi", hotelId: "12349" },
    { name: "Staybook City Stories New Delhi Train Station", hotelId: "12346" },
    { name: "Corbett Paradiso Resort By Staybook", hotelId: "12345" },
  ]);

  return (
    <React.Fragment>
      <div className={`${classes.footerBody} ${classes.noprint}`}>
        <Image
          src={`/images/footerBg.svg`}
          alt="StayBook"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />

        <div className={classes.logoCircle}>
          <Image
            src={`/images/logo.png`}
            alt={"StayBook"}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className={`rounded-full`}
          />
          <div className={classes.line}></div>
          <p>2022 © StayBook, New Delhi. All rights reserved</p>
          <Link href="Tel: +91-8373929299">Ph. no: +91-8373929299</Link>
          <Link href="mailto: booking@staybook.in">booking@staybook.in</Link>
        </div>

        <div className={`${classes.linkCard} ${classes.noprint}`}>
          <div className={classes.heading}>
            <h2>Hotels:</h2>
            {data.map((hotel: any, index: number) => (
              <div
                key={index}
                className={`text-[#cf8f24] my-1 cursor-pointer hover:underline text-sm`}
                onClick={hotelUrlHandler.bind(null, hotel.hotelId)}
              >
                {hotel.name}
              </div>
            ))}
          </div>

          <div className={classes.heading}>
            <h2>Socials:</h2>
            <Link href="https://www.instagram.com/staybook_1/" target="_blank">
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/budgetfriendlyhotel?paipv=0&eav=AfZ-waWz6OajACPaAqHeTptaNS9Rt4i4iwbdVK0jE5KwoQfbZ6GsLkTVHLjTpMMeyxk"
              target="_blank"
            >
              Facebook
            </Link>
            <Link href="https://twitter.com/stayboook" target="_blank">
              Twitter
            </Link>
          </div>

          <div className={classes.heading}>
            <h2>Interests:</h2>
            <Link href="/packages">Tours and Packages</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/contactUs">Contact Us</Link>
            <Link href="/FAQ">FAQ</Link>
          </div>

          <div className={classes.heading}>
            <h2>Misc:</h2>
            <Link href={"/tnc"}>Terms and Conditions</Link>
            <Link href={"/policy/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/policy/refund-policy"}>Refund Policy</Link>
            <Link href={"/policy/general-policy"}>General Policy</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
