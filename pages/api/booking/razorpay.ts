

const Razorpay = require("razorpay");
const shortid = require("shortid");

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});

async function handler(req: any, res: any) {
  const receivedData = req.body;
  // const { paying_Amount } = receivedData;

  try {
    const payment_Capture = 1;
    const payable_Amount = 1 * 100; // in paisa
    const currency = "INR";
    const options = {
      amount: payable_Amount.toString(),
      currency,
      receipt: shortid.generate(),
      notes: {
        user_Id: "user-id",
        user_Name: "Rahul Singh",
        user_Email_Id: "email",
        user_Phone_Number: "",
        user_Address: "",
        hotel_Id: "product-id",
        room_Id: "room-id",
      },
    };

    const order = await razorpayInstance.orders.create(options);
    console.log(order);

    res.status(201).json({
      paymentCredentails: options,
      error: null,
      message: "User payment successful.",
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      paymentCredentails: null,
      error,
      message: "Error occoured",
    });
  }
}

export default handler;
