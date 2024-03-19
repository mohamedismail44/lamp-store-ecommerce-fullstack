/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode:true,
  swcMinify:true,
  output:'export'
};

export default nextConfig;
