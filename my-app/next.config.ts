/** @type {import('next').NextConfig} **/

const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '',      // Base path for your site
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig;
