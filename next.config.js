const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'git.theclashfruit.me',
        port: '',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zleed.tv',
        port: '',
        pathname: '**',
      }
    ],
  }
}

module.exports = nextConfig
