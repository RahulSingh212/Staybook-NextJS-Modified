const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req: any, res: any) {
  const receivedData = req.body;
  const { userBooking } = receivedData;

  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = Math.round(userBooking.total_Price);
    // const amount = 1;
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
