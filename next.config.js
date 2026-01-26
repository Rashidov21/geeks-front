module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.geeksandijan.uz/api/:path*',
      },
      {
        source: '/:path*',
        destination: '/404',
      },
    ];
  },

  images: {
    domains: ["api.geeksandijan.uz"],
  },
};