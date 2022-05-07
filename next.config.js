/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
rewrites: async () => {
  return [
    {
      source: "/public/rewards.html",
      destination: "/pages/api/rewards.js",
    }
  ]
}