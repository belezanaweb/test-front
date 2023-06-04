/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    serviceCartUrl: process.env.SERVICE_CART_URL,
  },
  publicRuntimeConfig: {
    serviceCartUrl: process.env.SERVICE_CART_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
