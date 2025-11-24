import path from "node:path";

import {Configuration} from "webpack";

export const buildResolvers = (srcPath: string): Configuration['resolve'] => {
  return {
    alias: {
      '@assets': path.resolve(srcPath, 'assets'),
      '@pages': path.resolve(srcPath, 'pages'),
      '@constants': path.resolve(srcPath, 'constants'),
      '@store': path.resolve(srcPath, 'store'),
      '@components': path.resolve(srcPath, 'components'),
      '@utils': path.resolve(srcPath, 'utils'),
      '@wrappers': path.resolve(srcPath, 'wrappers')
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  }
}