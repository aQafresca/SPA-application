/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.scss': ['stylelint --fix', 'prettier --write'],
  '*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
};