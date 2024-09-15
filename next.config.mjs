// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    images:{
      remotePatterns:[
        {
          protocol:'https',
          hostname:'firebasestorage.googleapis.com',
          port:''
        },
        {
          protocol:'https',
          hostname:'pasc2022.s3.ap-south-1.amazonaws.com',
          port:''
        }
      ]
    }
  };
  
export default nextConfig; 