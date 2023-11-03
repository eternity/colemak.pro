/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",

  images: {
    domains: ["colemak.pro"],
    deviceSizes: [
      1280, // HD(720p)
      1920, // Full HD(1080p)
      2048, // 2K
      3840, // 4K UHD
    ],
    remotePatterns: [
      {
        // Avatars of users signed in with Google
        protocol: "https",
        hostname: "**.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.colemak.pro" }],
        destination: "https://colemak.pro/:path*",
        statusCode: 308,
      },
    ];
  },
};
