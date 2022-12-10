/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'bluemountains88-blogster-bucket.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
