import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // typescript:{
  //   //Will still allow production builds if there are type errors
  //   ignoreBuildErrors: true,
  // },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'utfs.io',
        port:''
      }
    ]
  }
};

export default nextConfig;
