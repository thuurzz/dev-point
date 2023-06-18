/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-assets-4-app.s3.amazonaws.com",
        pathname: "/assets/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
