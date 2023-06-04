/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  head: {
    link: [
      {
        rel: 'icon',
        href: '.public/icon.ico',
      },
    ],
  },
}

module.exports = nextConfig
