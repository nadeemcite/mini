import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/dua-jar',
        destination: '/u/3ebf4342-09da-4c1a-bbb5-2482d65fcbfa',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
