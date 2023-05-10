

const Razorpay = require("razorpay");
const shortid = require("shortid");

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});

async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { orderCredentails, userBooking } = receivedData;

  try {
    

    // res.status(201).json({
    //   paymentCredentails: options,
    //   error: null,
    //   message: "User payment successful.",
    // });
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
