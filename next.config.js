/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.wecollect.tech",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "blog.wecollect.tech",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.Wecollect.tech",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

