/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/personal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
