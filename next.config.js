/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure Next.js listens on all interfaces
  server: {
    hostname: '0.0.0.0',
  },
}

module.exports = nextConfig

