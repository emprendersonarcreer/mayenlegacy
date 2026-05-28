import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect non-www → www (fixes alkalinationusa.com redirect and direct visits)
      {
        source: "/:path*",
        has: [{ type: "host", value: "mayenlegacy.com" }],
        destination: "https://www.mayenlegacy.com/:path*",
        permanent: true,
      },
      // Studio redirects
      {
        source: "/studio",
        destination: "https://pf010nyp.sanity.studio",
        permanent: false,
      },
      {
        source: "/studio/:path*",
        destination: "https://pf010nyp.sanity.studio/:path*",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
