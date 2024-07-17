/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
    // metadataBase: new URL('https://www.hakanda.com'),
    metadataBase: new URL(
      'https://hakando-m3etttkn6-hakans-projects-e7b004a2.vercel.app'
    ),
  },
};

module.exports = nextConfig;
