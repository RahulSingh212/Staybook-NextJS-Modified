import { cookies } from "next/headers";
import emailjs from "@emailjs/browser";
import { BookingDetails } from "@/classModels/bookings/bookingDetails";
import {
  BOOKED_ROOMS_COLLECTION_NAME,
  HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME,
  USER_BOOKINGS_COLLECTION_NAME,
} from "../helper";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { db } from "../firebase";
import { RoomDetails } from "@/classModels/bookings/roomDetails";

export const getBookedHotelDetails = async (
  userEmailId: string,
  bookingId: string
) => {
  const docRef = doc(
    db,
    USER_BOOKINGS_COLLECTION_NAME,
    userEmailId,
    BOOKED_ROOMS_COLLECTION_NAME,
    bookingId
  );
  const booking = await getDoc(docRef);

  const firestore = getFirestore();
  const bookedRoomsCollectionRef = collection(
    firestore,
    USER_BOOKINGS_COLLECTION_NAME,
    userEmailId,
    BOOKED_ROOMS_COLLECTION_NAME,
    bookingId,
    HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME
  );
  let bookingInfo = new BookingDetails();

  let bookedRoomsList: RoomDetails[] = [];
  const roomsQuerySnapshot = await getDocs(bookedRoomsCollectionRef);

  for (let room of roomsQuerySnapshot.docs) {
    let roomInfo = new RoomDetails();
    roomInfo.room_Id = room.id;
    roomInfo.room_Name = room.data().room_Name;
    roomInfo.room_Info = room.data().room_Info;
    roomInfo.room_Count = room.data().room_Count;
    roomInfo.plan_Id = room.data().plan_Id;
    roomInfo.plan_Name = room.data().plan_Name;
    roomInfo.plan_Info = room.data().plan_Info;
    roomInfo.plan_Price = room.data().plan_Price;
    roomInfo.num_Guests = room.data().num_Guests;
    roomInfo.num_Children = room.data().num_Children;
    roomInfo.num_Infants = room.data().num_Infants;
    bookedRoomsList.push(roomInfo);
  }

  bookingInfo.roomsList = bookedRoomsList;
  bookingInfo.booking_Id = booking.id;
  bookingInfo.hotel_Image_Url = booking.data()?.hotel_Image_Url;
  bookingInfo.hotel_Name = booking.data()?.hotel_Name;
  bookingInfo.hotel_Landmark = booking.data()?.hotel_Landmark;
  bookingInfo.hotel_Owner_Id = booking.data()?.hotel_Owner_Id;
  bookingInfo.hotel_Firebase_Id = booking.data()?.hotel_Firebase_Id;
  bookingInfo.hotel_Sanity_Id = booking.data()?.hotel_Sanity_Id;
  bookingInfo.user_Unique_Id = booking.data()?.user_Unique_Id;
  bookingInfo.user_Email_Id = booking.data()?.user_Email_Id;
  bookingInfo.user_Name = booking.data()?.user_Name;
  bookingInfo.user_Phone_Number = booking.data()?.user_Phone_Number;
  bookingInfo.total_Rooms_Count = booking.data()?.total_Rooms_Count;
  bookingInfo.total_Room_Cost = booking.data()?.total_Room_Cost;
  bookingInfo.total_Tax = booking.data()?.total_Tax;
  bookingInfo.total_Price = booking.data()?.total_Price;
  bookingInfo.payment_Made = booking.data()?.payment_Made;
  bookingInfo.amount_Paid = booking.data()?.amount_Paid;
  bookingInfo.booking_Time = new Date(booking.data()?.booking_Time);
  bookingInfo.checkin_Time = new Date(booking.data()?.checkin_Time);
  bookingInfo.checkout_Time = new Date(booking.data()?.checkout_Time);
  bookingInfo.razorpay_Payment_Id = booking.data()?.razorpay_Payment_Id;
  bookingInfo.razorpay_Order_Id = booking.data()?.razorpay_Order_Id;
  bookingInfo.razorpay_Signature_Id = booking.data()?.razorpay_Signature_Id;
  bookingInfo.receipt_Id = booking.data()?.receipt_Id;

  return JSON.stringify(bookingInfo);
};

const emailHandler = async ({email, hotelName, checkIn, checkOut, Plans, address, contact, price}:any) => {
    let templateParams = {
      to_name: email,
      hotelName: hotelName,
      checkIn: checkIn!.toLocaleDateString(),
      checkOut: checkOut!.toLocaleDateString(),
      roomNumbers: Plans.length.toString(),
      rooms: Plans,
      guests: 2,
      hotelContact: "+918373929299",
      address: address,
      status: `Amount due: ₹${price}, Pay now to save extra ₹${Math.min(
        175,
        0.05 * price
      )}-`,
      customerContact: contact,
    };

    try {
      await emailjs
        .send(
          "service_pz9e3th",
          "template_i78ka1b",
          templateParams,
          "rxw7da9yaeHbqZ1ou"
        )
    } catch (error) {
      console.log(error);
    }
}

export const hotelBookingHandler = async (userBooking: BookingDetails) => {
  const response = await fetch("/api/booking/setHotelBooking", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  let roomInfo:string=''
  userBooking.roomsList?.forEach((room)=>{
    roomInfo  += `Room ${room.room_Name} with plan ${room.plan_Name}, `
  }), 

  await emailHandler ({
    email: userBooking.user_Email_Id, 
    hotelName: userBooking.hotel_Name, 
    checkIn: userBooking.checkin_Time, 
    checkOut: userBooking.checkout_Time, 
    Plans:roomInfo,
    address: userBooking.hotel_Landmark, 
    contact: userBooking.user_Phone_Number, 
    price: userBooking.total_Price,
  })
  return data;
};

export const fetchUserPersonalDetails = async (userBooking: BookingDetails) => {
  const response = await fetch("/api/userProfile/fetchUserDetails", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.userCredentials) {
    if (data.userCredentials.User_First_Name === "") {
      userBooking.user_Name = data.userCredentials.User_Display_Name;
    } else {
      userBooking.user_Name =
        data.userCredentials.User_First_Name +
        " " +
        data.userCredentials.User_Middle_Name +
        " " +
        data.userCredentials.User_Last_Name;
    }
    userBooking.user_Phone_Number = data.userCredentials.User_Mobile_Number;
    userBooking.user_Email_Id = data.userCredentials.User_Email_Id;
  }

  return userBooking;
};
