import { auth } from "@/lib/firebase";
import { Cookie } from "next-auth/core/lib/cookie";
// import cookie from "js-cookie"; // front end cookie which is present on the front end side
import cookie from "cookie"; // server side cookie only https and available on the server side
import { serialize, parse } from "cookie";

const Razorpay = require("razorpay");
const shortid = require("shortid");

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});

async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { userBooking } = receivedData;
  
  let room_Id_List = [];
  for (let i = 0; i < userBooking.roomsList.length; i++) {
    room_Id_List.push(userBooking.roomsList[i].roomId);
  }

  try {
    const payment_Capture = 1;
    const payable_Amount = Number(1 * 100); // in paisa
    const currency = "INR";
    const options = {
      amount: payable_Amount.toString(),
      currency,
      receipt: shortid.generate(),
      notes: {
        user_Id: userBooking.user_Unique_Id,
        user_Name: userBooking.user_Name,
        user_Email_Id: userBooking.user_Email_Id,
        user_Phone_Number: userBooking.user_Phone_Number,
        user_Address: userBooking.user_Address,
        hotel_Id: userBooking.hotel_Firebase_Id,
        room_Id_List: JSON.stringify(room_Id_List),
      },
    };

    const order = await razorpayInstance.orders.create(options);
    console.log(order);

    res.status(201).json({
      orderCredentails: order,
      error: null,
      message: "User order creation successful.",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      orderCredentails: null,
      error,
      message: "Error occoured in order creation",
    });
  }
}

export default handler;
