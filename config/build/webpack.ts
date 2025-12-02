import webpack from "webpack";

import {buildChunks} from "./chunks";
import {buildDevServer} from "./devServer";
import {buildLoaders} from "./loaders";
import {buildPlugins} from "./plugins";
import {buildResolvers} from "./resolvers";
import {IBuildOptions} from "./types/types";


export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
  const {mode, paths} = options;
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    optimization: buildChunks(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolvers(paths.src),
  }
}
