/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  }
};

export default nextConfig;
