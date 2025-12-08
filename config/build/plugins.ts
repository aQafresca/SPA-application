import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration} from 'webpack';

import {IBuildOptions} from "./types/types";

export const buildPlugins = ({paths}: IBuildOptions): Configuration['plugins'] => {

return [
  new HtmlWebpackPlugin({template: paths.html}),
  new ESLintPlugin({
    emitWarning: true,
    failOnError: false,
    failOnWarning: false,
    extensions: ['ts', 'tsx', 'js', 'jsx'],
    exclude: 'dist',
  }),
]
}