import path from 'node:path';

import webpack from 'webpack';

import { IBuildPaths, TBuildMode } from './config/build/types/types';
import { buildWebpack } from './config/build/webpack';

interface IEnvVariables {
  mode: TBuildMode;
  port: number;
}

export default (env: IEnvVariables): webpack.Configuration => {
  const paths: IBuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'src', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  return buildWebpack({
    port: env.port ?? 4000,
    mode: env.mode ?? 'development',
    paths,
  });
};
