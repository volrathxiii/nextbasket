/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/product-images/**',
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
        port: '',
        pathname: '/g/**',
      },
      {
        protocol: 'https',
        hostname: 'random.imagecdn.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

export default nextConfig;
