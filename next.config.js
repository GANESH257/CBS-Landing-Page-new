/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  basePath: process.env.NODE_ENV === 'production' ? '/landingpage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landingpage/' : '',
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/landingpage/_next/image' : '/_next/image',
    domains: ['cbsurgery.com'],
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp']
  },
  // Add debugging information
  poweredByHeader: false,
  compress: true,
  // Ensure static files are served correctly
  distDir: 'out',
}

module.exports = nextConfig 