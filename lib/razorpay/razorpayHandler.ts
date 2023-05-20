import { BookingDetails } from "@/classModels/bookings/bookingDetails";

export const initializeRazorpay = (userBooking: BookingDetails) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const makePayment = async (userBooking: BookingDetails) => {
  const res = await initializeRazorpay(userBooking);

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  // Make API call to the serverless API
  const data = await fetch("/api/booking/razorpay", {
    method: "POST",
    body: JSON.stringify({
      userBooking: userBooking,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((t) => t.json());
  console.log(data);

  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: 'StayBook',
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Thankyou for your test donation",
    image: "/images/favicon.png",
    handler: function (response: {
      razorpay_payment_id: any;
      razorpay_order_id: any;
      razorpay_signature: any;
    }) {
      // Validate payment at server - using webhooks is a better idea.
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: userBooking.user_Name,
      email: userBooking.user_Email_Id,
      contact: userBooking.user_Phone_Number,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
