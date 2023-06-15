/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Watcher1986/test-api/main/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
