export type TBuildMode = 'production' | 'development';


export interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  port: number;
  paths: IBuildPaths;
  mode: TBuildMode;
}