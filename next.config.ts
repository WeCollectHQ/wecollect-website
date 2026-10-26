import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;
