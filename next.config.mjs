/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [400, 950, 1500],
    imageSizes: [400, 950, 1500],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/thewrightdesigns/monks-medical/*/**",
      },
      {
        protocol: "https",
        hostname: "blog.monksmedical.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
