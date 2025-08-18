/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "40mb", // adjust as needed
    },
  },
};

export default nextConfig;
