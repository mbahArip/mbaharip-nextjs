/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [
      "files.mbaharip.me",
      "pbs.twimg.com",
      "www.pixelstalk.net",
      "www.mbaharip.me",
      "cdn.mbaharip.me",
      "source.unsplash.com",
    ],
    minimumCacheTTL: 3600,
  },
};
