import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // set to false if you want Vercel to optimize images
  },
  // Removed trailingSlash: true to resolve 404 errors on sub-pages
};

export default nextConfig;
