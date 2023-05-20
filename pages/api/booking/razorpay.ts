const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { userBooking } = receivedData;

  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = userBooking.total_Price.toFixed(2);
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
        error: null,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        id: null,
        curreny: null,
        amount: null,
        error: err,
      });
    }
  } else {
    // Handle any other HTTP method
  }
}

// const Razorpay = require("razorpay");
// const shortid = require("shortid");

// export const razorpayInstance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_ID,
//   key_secret: process.env.RAZORPAY_API_SECRET_KEY,
// });

// async function handler(req: any, res: any) {
//   const receivedData = req.body;
//   // const { paying_Amount } = receivedData;

//   try {
//     const payment_Capture = 1;
//     const payable_Amount = 1 * 100; // in paisa
//     const currency = "INR";
//     const options = {
//       amount: payable_Amount.toString(),
//       currency,
//       receipt: shortid.generate(),
//       notes: {
//         user_Id: "user-id",
//         user_Name: "Rahul Singh",
//         user_Email_Id: "email",
//         user_Phone_Number: "",
//         user_Address: "",
//         hotel_Id: "product-id",
//         room_Id: "room-id",
//       },
//     };

//     const order = await razorpayInstance.orders.create(options);
//     console.log(order);

//     res.status(201).json({
//       paymentCredentails: options,
//       error: null,
//       message: "User payment successful.",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(422).json({
//       paymentCredentails: null,
//       error,
//       message: "Error occoured",
//     });
//   }
// }

// export default handler;
