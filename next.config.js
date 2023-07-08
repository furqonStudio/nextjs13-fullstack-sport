/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'picsum.photos',
      'firebasestorage.googleapis.com',
    ],
  },
}

module.exports = nextConfig
