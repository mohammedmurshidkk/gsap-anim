/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gsap-anim',
  reactStrictMode: true,
  images: { domains: ['picsum.photos'] },
};

export default nextConfig;
