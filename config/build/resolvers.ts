import path from "node:path";

import {Configuration} from "webpack";

export const buildResolvers = (srcPath: string): Configuration['resolve'] => {
  return {
    alias: {

      '@': path.resolve(srcPath),
      '@pages': path.resolve(srcPath, 'pages'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  }
}
