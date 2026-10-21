import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (custom domain, so no basePath).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
