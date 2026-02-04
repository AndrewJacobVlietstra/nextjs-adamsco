import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	outputFileTracingRoot: __dirname, // Suppresses multiple lockfiles warning
};

export default nextConfig;
