/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages:["mongoose"],
  // },
  images: {
    domains: ['lh3.googleusercontent.com'], // Add your image domain(s) here
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
};

export default nextConfig;
