/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
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
};
