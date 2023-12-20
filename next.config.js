/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vinyl.lofirecords.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'f4.bcbits.com',
        port: '',
      },
      {
        protocol:"https",
        hostname:"misc.scdn.co",
        
      },
      {
        protocol:"https",
        hostname:"daily-mix.scdn.co",
      },
      {
        protocol:"https",
        hostname:"wrapped-images.spotifycdn.com"
      },
      {
        protocol:"https",
        hostname:"i.scdn.co"
      },
      {
        protocol:"https",
        hostname:"dailymix-images.scdn.co"
      }
    ],
  }
}

module.exports = nextConfig
