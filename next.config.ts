import type { NextConfig } from "next";

// If you use a custom domain, you should not have a basePath.

const nextConfig: NextConfig = {
  output: "export",
  // Disable image optimization since we are using static export without a custom loader
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
