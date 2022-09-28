/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tonyveiculos.com.br'],
  },
}

module.exports = nextConfig
