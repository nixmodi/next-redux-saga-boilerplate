const withImages = require('next-images');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const nextConfig = {
  devIndicators: {
    autoPrerender: false
  },
  env: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/
            }
          ]
        })
      );
    }
    return config;
  }
};
module.exports = withImages(nextConfig);
