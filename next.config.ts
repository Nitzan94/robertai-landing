import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/robertai-landing',
  assetPrefix: '/robertai-landing/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
