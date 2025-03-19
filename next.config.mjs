/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'uploadthing.com',
          'utfs.io',
          'img.clerk.com',
          'subdomain',
          'files.stripe.com',
        ],
      },
      reactStrictMode: false,
      env: {
        UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
        UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
      },
};


export default nextConfig;
