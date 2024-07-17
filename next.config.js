/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
    metadataBase: new URL('https://www.hakanda.com'),
  },
};

module.exports = nextConfig;
