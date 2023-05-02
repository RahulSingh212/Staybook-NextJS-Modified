/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["icons8.com", "cdn.sanity.io"],
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
