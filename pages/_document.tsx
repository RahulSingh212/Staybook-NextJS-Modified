import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://checkout.razorpay.com/v1/checkout.ts" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var options = {
                  key: '${process.env.NEXT_PUBLIC_RAZORPAY_SECRET}',
                  name: 'Rahul Singh',
                  description: 'YOUR_DESCRIPTION',
                  image: 'https://lh3.googleusercontent.com/a/AEdFTp65wOTrRfPJH4y-cXtcNYNw6kbbrjkhQAEpWljMyw=s96-c',
                  handler: function(response) {
                    console.log(response);
                  },
                  prefill: {
                    name: 'Rahul Singh',
                    email: 'rahulsinghrs174326@gmail.com',
                    contact: '7543041204',
                  },
                  notes: {
                    address: 'New Delhi',
                  },
                  theme: {
                    color: 'blue',
                  },
                };
                if (typeof window !== 'undefined' && typeof window.Razorpay === 'undefined') {
                  var script = document.createElement('script');
                  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                  script.async = true;
                  script.onload = function() {
                    var Razorpay = new window.Razorpay(options);
                    Razorpay.on('payment.failed', function(response) {
                      console.log(response.error.code);
                      console.log(response.error.description);
                      console.log(response.error.source);
                      console.log(response.error.step);
                      console.log(response.error.reason);
                      console.log(response.error.metadata.order_id);
                      console.log(response.error.metadata.payment_id);
                    });
                    window.Razorpay = Razorpay;
                  }
                  document.body.appendChild(script);
                } else if (typeof window !== 'undefined' && typeof window.Razorpay !== 'undefined') {
                  var Razorpay = new window.Razorpay(options);
                  Razorpay.on('payment.failed', function(response) {
                    console.log(response.error.code);
                    console.log(response.error.description);
                    console.log(response.error.source);
                    console.log(response.error.step);
                    console.log(response.error.reason);
                    console.log(response.error.metadata.order_id);
                    console.log(response.error.metadata.payment_id);
                  });
                  window.Razorpay = Razorpay;
                }
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
