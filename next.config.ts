import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	outputFileTracingRoot: __dirname, // Suppresses multiple lockfiles warning

	// Essentially decommissioning page without deleting it incase its needed again.
	async redirects() {
		return [
			{
				source: "/brands/tanta",
				destination: "/not-found",
				permanent: true, // Sends a 308 permanent redirect. Use false for a 307 temporary redirect.
			},
			{
				source: "/brands/saburo",
				destination: "/not-found",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
