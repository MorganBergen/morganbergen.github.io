/** @type {import('next').NextConfig} **/

const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '',      // Base path for your site
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: '.',  // Ensure assets are loaded correctly
}

export default nextConfig;
