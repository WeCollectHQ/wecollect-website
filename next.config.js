/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.wecollect.tech",
      },
      {
        protocol: "http",
        hostname: "blog.wecollect.tech",
      },
    ],
  },
};

module.exports = nextConfig;

