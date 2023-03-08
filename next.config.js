/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    
    domains: ["staticflicker.com"],
   
    unoptimized: false,
  },
  basePath: '/hc_ASIET',
}

module.exports = nextConfig

