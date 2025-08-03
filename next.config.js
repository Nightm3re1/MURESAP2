
/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts' // Point to your i18n.ts file
);

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '8fpa87ovv8.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Added this line
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
