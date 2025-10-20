// next.config.ts (TypeScript)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // PPR is now enabled via cacheComponents
    cacheComponents: true,
  },
};

export default nextConfig;
