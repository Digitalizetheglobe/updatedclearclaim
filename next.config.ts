import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No "output: export" = full Next.js on Vercel (SSR, API routes, image optimization)
  images: {
    unoptimized: true, // set to false if you want Vercel to optimize images
  },
  trailingSlash: true,
};

export default nextConfig;
