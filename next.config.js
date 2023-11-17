const withTwin = require('./withTwin.js');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  swcMinify: true,
  compiler: {
    // ssr, displayName true가 기본값으로 켜진다.
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
