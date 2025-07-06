import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Both are required for static export
  output: "export",
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
