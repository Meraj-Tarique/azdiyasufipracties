import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "mlena6qa4grg.i.optimole.com",
      'islamic-blog-app-spzz.vercel.app',
      'islamic-blog-app-spzz-git-main-merajtariqs-projects.vercel.app',
    ],
    remotePatterns: [
       {
        protocol: "https",
        hostname: "hatchtechs.com",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "islamic-blog-app-spzz.vercel.app",
      },
      {
        protocol: "https",
        hostname: "https://azdiya-sufi-teaching.netlify.app/blog/quran-compilation",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
    webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    if (!isServer) {
      // Don't resolve 'fs' module on the client to prevent this error
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        canvas: false,
      };
    }
    return config;
  },
};

export default nextConfig;
