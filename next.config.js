/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: { styledComponents: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts)x?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
