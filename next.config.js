/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["icons8.com", "cdn.sanity.io", "lh3.googleusercontent.com"],
    // disableStaticImages: true,
    // disableServerSideCache: true,
  },
  env: {
    RAZORPAY_API_KEY: process.env.RAZORPAY_API_SECRET_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/api/paymentVerification',
        destination: 'https://checkout.razorpay.com/v1/checkout.js',
      },
    ];
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Exclude the 'net' module from the server-side bundle
  //   if (!isServer) {
  //     config.node = {
  //       net: 'empty',
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
