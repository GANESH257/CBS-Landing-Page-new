/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/send_email.php',
        destination: '/api/send_email.php',
      },
    ]
  },
}

module.exports = nextConfig 