import type { NextConfig } from "next";

// InfinityFree serves static files and does not run a Node.js/Next.js server.
// `next build` therefore writes a complete deployable site to /out.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
