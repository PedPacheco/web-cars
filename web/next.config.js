/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'tonyveiculos.com.br',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
    ],
  },
}

module.exports = nextConfig
