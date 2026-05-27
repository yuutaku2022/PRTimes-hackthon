/** @type {import('next').NextConfig} */
const useMocks = process.env.USE_MOCKS === '1';

const nextConfig = {
  async rewrites() {
    // When mocks are enabled, do not proxy /api to the PHP backend so
    // Next.js API routes under /app/api can handle requests.
    if (useMocks) return [];

    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
