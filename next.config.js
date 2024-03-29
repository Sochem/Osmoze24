/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buffer.com",
        port: "",
      },
    ],
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
