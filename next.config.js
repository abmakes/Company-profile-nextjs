/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const ContentSecurityPolicy = `
  default-src 'self';
  img-src 'self' data: https:;
  script-src-elem 'self';
  script-src 'self';
  font-src 'self' *fonts.googleapis.com;  
`

const securityHeaders = []

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
      }

    ]
  },
}