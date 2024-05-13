/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gongbang-v2.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
