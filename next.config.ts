import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 95],
  },
};

export default nextConfig;
