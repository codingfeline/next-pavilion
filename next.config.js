/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

// trailingSlash: true,
// distDir: 'naz2',
// basePath: '/dev',
