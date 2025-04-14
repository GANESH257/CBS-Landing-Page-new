/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'standalone',
  images: {
    unoptimized: true,
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