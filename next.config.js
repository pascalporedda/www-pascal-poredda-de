module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com'],
  },
  async rewrites() {
    return [
      {
        source: '/privacy.html',
        destination: '/privacy',
      },
      {
        source: '/imprint.html',
        destination: '/imprint',
      },
    ];
  },
};
