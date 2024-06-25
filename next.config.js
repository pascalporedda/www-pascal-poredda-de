const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy()({
  swcMinify: true,
  reactStrictMode: true,
  // experimental: {
  //   serverActions: true,
  // }
  images: {
    domains: ['images.unsplash.com', 'pascal-poredda.de'],
  },
});

module.exports = nextConfig;
