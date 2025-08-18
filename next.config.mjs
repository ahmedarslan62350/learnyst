/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // Adjust as needed
    },
  },
};

export default nextConfig;
