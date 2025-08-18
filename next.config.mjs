/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "200mb", // Adjust as needed
    },
  },
};

export default nextConfig;
