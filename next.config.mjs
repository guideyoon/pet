/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    // 빌드 시 ESLint 오류를 경고로만 처리
    ignoreDuringBuilds: false,
  },
  typescript: {
    // 빌드 시 TypeScript 오류를 경고로만 처리
    ignoreBuildErrors: false,
  },
};

export default nextConfig;

