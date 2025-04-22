/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yviet.ai.vn",
      },
    ],
  },
};

export default nextConfig;
