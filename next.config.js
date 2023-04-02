const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  env: {
    API_URL: 'https://track-master-three.vercel.app',
  }
}

module.exports = nextConfig
