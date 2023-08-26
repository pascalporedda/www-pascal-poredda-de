const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // experimental: {
  //   serverActions: true,
  // }
};


module.exports = withContentlayer(nextConfig);
