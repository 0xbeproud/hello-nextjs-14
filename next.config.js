const withTwin = require('./withTwin');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
  reactStrictMode: true,
  trailingSlash: true,
  // experimental: {
  //   modularizeImports: {
  //     antd: {
  //       transform: 'antd/lib/{{member}}',
  //     },
  //     lodash: {
  //       transform: 'lodash/{{member}}',
  //     },
  //   },
  // },
});

module.exports = nextConfig;
