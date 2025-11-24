import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack';

import {IBuildOptions} from "./types/types";

export const buildLoaders = (options: IBuildOptions): ModuleOptions['rules'] => {
  const isDev: boolean = options.mode === 'development';

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
     isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }


  return [
    scssLoader,
    tsLoader,
  ]
}