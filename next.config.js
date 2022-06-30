/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const ContentSecurityPolicy = `
  default-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  script-src 'self' 'unsafe-eval';
  style-src 'self' fonts.googleapis.com 'unsafe-inline';
  font-src 'self' fonts.gstatic.com;
  connect-src 'self';  
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      }
    ]
  },
}