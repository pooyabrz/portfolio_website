import type { NextConfig } from "next";

// Static export means this site works on GitHub Pages as well as any CDN.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  reactStrictMode: true
};
export default config;
