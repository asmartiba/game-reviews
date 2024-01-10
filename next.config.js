/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// next.config.js
module.exports = {
    // Other configurations...
    async redirects() {
      return [
        {
          source: '/games/:slug',
          destination: '/games/[slug]',
          permanent: true,
        },
      ];
    },
  };
  