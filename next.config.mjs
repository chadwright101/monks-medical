/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [400, 950, 1500],
    imageSizes: [400, 950, 1500],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io/thewrightdesigns/monks-medical",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default nextConfig;
