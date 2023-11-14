/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
    swcMinify: true,
}

module.exports = nextConfig
