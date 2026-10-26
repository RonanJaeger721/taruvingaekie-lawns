import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
    formats: ["image/webp"],
    deviceSizes: [480, 640, 750, 960, 1200, 1600],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
