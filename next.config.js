/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://hanko-hackathon-seven.vercel.app/',
          },
        ]
      },
    images: { domains: ['picsum.photos', 'unsplash.com'] },
}

module.exports = nextConfig
