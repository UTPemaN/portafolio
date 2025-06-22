/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portafolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portafolio/' : '',
}

module.exports = nextConfig 