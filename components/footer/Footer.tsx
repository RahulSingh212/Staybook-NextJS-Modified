import React, { useEffect, useState } from "react";
import classes from "./Footer.module.scss";
import moment from "moment";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const pageHandler = (url: string) => {
    router.push({
      pathname: url,
    });
  }

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
    <div className={`${classes.footerBody} ${classes.noprint}`}>
      <img src={`/images/footerBg.svg`} alt={"StayBook"} />

      <div className={classes.logoCircle}>
        <img src={`/images/logo.png`} alt={"StayBook"} />
        <div className={classes.line}></div>
        <p>2022 © StayBook, New Delhi. All rights reserved</p>
        <a href="Tel: +91-8373929299">Ph. no: +91-8373929299</a>
        <a href="mailto: booking@staybook.in">booking@staybook.in</a>
      </div>

      <div className={`${classes.linkCard} ${classes.noprint}`}>
        <div className={classes.heading}>
          <h2>Hotels:</h2>
            {data.map((hotel: any, index: number) => (
              <div className={`text-red-400 my-1 cursor-pointer hover:underline text-sm`} onClick={hotelUrlHandler.bind(null, hotel.hotelId)}>{hotel.name}</div>
            ))}
        </div>

        <div className={classes.heading}>
          <h2>Socials:</h2>
          <a href="https://www.instagram.com/staybook_1/" target="_blank">
            Instagram
          </a>
          <a
            href="https://www.facebook.com/budgetfriendlyhotel?paipv=0&eav=AfZ-waWz6OajACPaAqHeTptaNS9Rt4i4iwbdVK0jE5KwoQfbZ6GsLkTVHLjTpMMeyxk"
            target="_blank"
          >
            Facebook
          </a>
          <a href="https://twitter.com/stayboook" target="_blank">
            Twitter
          </a>
        </div>

        <div className={classes.heading}>
          <h2>Interests:</h2>
          <a href="/packages">Tours and Packages</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQ</a>
        </div>

        <div className={classes.heading}>
          <h2>Misc:</h2>
          <a href={"/tnc"}>Terms and Conditions</a>
          <a href={"/policy/privacy-policy"}>Privacy Policy</a>
          <a href={"/policy/refund-policy"}>Refund Policy</a>
          <a href={"/policy/general-policy"}>General Policy</a>
        </div>
      </div>
    </div>
  );
}
