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
