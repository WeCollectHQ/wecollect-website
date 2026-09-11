import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.wecollect.tech",
      },
      {
        protocol: "http",
        hostname: "blog.wecollect.tech",
      }
    ],
  },
};

export default nextConfig;
