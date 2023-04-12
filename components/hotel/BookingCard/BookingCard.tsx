import React from "react";
import { motion, motionValue } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { SocailIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import moment from "moment";
import { addDays } from "date-fns";
import AmountCard from "../AmountCard/AmountCard";

type Props = {
  plan_price: number;
  checkin: Date;
  checkout: Date;
  num_rooms: number;
};

export default function BookingCard(props: Props) {
  const navigate = useNavigate();
  let today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [username, setUsername] = React.useState<string>("");
  const CheckOutDate = sessionStorage.getItem("checkOut");
  const CheckInDate = sessionStorage.getItem("checkIn");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  var tempDate = new Date();
  const [checkIn, setCheckIn] = React.useState<Date | null>(
    CheckInDate ? new Date(CheckInDate) : today
  );
  const [initCheckout, setinitCheckout] = React.useState<Date | null>(
    CheckInDate ? new Date(CheckInDate) : today
  );
  const [checkOut, setCheckOut] = React.useState<Date | null>(
    CheckOutDate ? new Date(CheckOutDate) : tomorrow
  );

  const dispatch = useAppDispatch();
  const withoutTax = useAppSelector((state) => state.price.withoutTax);
  const price = useAppSelector((state) => state.price.value);
  const Plans = useAppSelector((state) => state.plans.selectedPlans);

  const [contact, setContact] = React.useState<any>("");
  const [payAtHotel, setPayAtHote] = React.useState<boolean>(false);
  const [isPaid, setIsPaid] = React.useState<boolean>(false);
  const [noSelected, setNoSelected] = React.useState<boolean>(false);
  const [noContact, setNoContact] = React.useState<boolean>(false);
  const [fullname, setFullname] = React.useState<any>("");
  const [useremail, setUserEmail] = React.useState<any>("");

  return (
    <React.Fragment>
      <div className="bookingCard" ref={cardRef}>
      <h1>₹{withoutTax}</h1>
      <div className="calendar">
        <div className="input">
          <div style={{ marginRight: "0.5rem" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Check In"
                value={hotelCtx.checkIn}
                minDate={new Date()}
                onChange={(newValue: any) => {
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div id="toOpen">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["day", "month"]}
                label="Check Out"
                value={hotelCtx.checkOut}
                minDate={initCheckout}
                onChange={(newValue: any) => {
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <p>{Plans.length} rooms</p>

      <div className="selectedPlans">
        {Plans.map((item, index) => (
          <SelectedPlan
            maxCap={item.maxCap}
            roomType={item.roomType}
            title={item.title}
            checkOut={checkOut}
            checkIn={checkIn}
            key={index}
          />
        ))}
      </div>

      <AmountCard checkOut={checkOut} checkIn={checkIn} />

      <input
        type="checkbox"
        name="input"
        style={{ marginTop: "10px" }}
        onChange={() => setPayAtHote((prev) => !prev)}
      />
      <label> Pay at hotel </label>

      {noSelected && (
        <div className="unselected">Please select a plan to continue</div>
      )}
      {noContact && (
        <div className="unselected">Please enter contact details</div>
      )}
      <div className="payAtHotel">
        {!isPaid ? (
          payAtHotel && (
            <form>
              {!username && (
                <input
                  className="customer-form"
                  type="text"
                  placeholder="Full name"
                  required
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                />
              )}
              {!username && (
                <input
                  className="customer-form"
                  type="email"
                  placeholder="Your email address"
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={useremail}
                />
              )}
              <PhoneInput
                className="phone"
                defaultCountry="IN"
                placeholder="Phone number (eg: 917017495876)"
                value={contact}
                onChange={setContact}
              />
              {/* <div className="button" onClick={payOnHotel}>
                Continue
              </div> */}
              <div className="button">
                Continue
              </div>
            </form>
          )
        ) : (
          <div className="Button-Loading">Booking Done</div>
        )}
      </div>

      {/* {!payAtHotel && (
        <button
          checkOut={checkOut}
          checkIn={checkIn}
          hotel={hotelName}
          address={address}
        />
      )} */}
    </div>
    </React.Fragment>
  );
}

BookingCard.defaultProps = {
  plan_price: 0,
  checkin: new Date(),
  chechout: addDays(new Date(), 1),
  num_rooms: 0,
};
