/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: 'standalone',
  reactStrictMode: false,
  images: {
    domains: ["icons8.com", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
  env: {
    RAZORPAY_API_KEY: process.env.RAZORPAY_SECRET,
  },
  async rewrites() {
    return [
      {
        source: '/api/paymentVerification',
        destination: 'https://checkout.razorpay.com/v1/checkout.js',
      },
    ];
  },
};

module.exports = nextConfig;
