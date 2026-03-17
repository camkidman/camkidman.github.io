import type { NextConfig } from "next";

const repoName = "camkidman.github.io";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
