import {Configuration} from "webpack";

import {IBuildOptions} from "./types/types";

export const buildChunks = (options: IBuildOptions): Configuration['optimization'] => {
  const isProd = options.mode === 'production';

  return {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimize: isProd,
  }
}