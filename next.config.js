/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
rewrites: async () => [
  {
    source: "/public/rewards.html",
    destination: "/pages/api/rewards.js",
  },
],