export const logError = (error: unknown, scope: string) => {
  return console.error(`[${scope}]`, error);
};
