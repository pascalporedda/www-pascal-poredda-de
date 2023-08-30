const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // experimental: {
  //   serverActions: true,
  // }
  images: {
    domains: ['images.unsplash.com', 'pascal-poredda.de'],
  },
};

module.exports = withContentlayer(nextConfig);
