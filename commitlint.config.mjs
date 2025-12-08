const Configuration = {
  extends: [],
  rules: {
    'type-empty': [0],
    'type-enum': [0],
    'header-pattern': [
      2,
      'always',
      /^([A-Z]+-\d+)\s+(ci|init|feat|fix|refactor|chore|style|docs|test|merge)(\([\w\-]+\))?:\s+.*$/,
    ],

    'header-max-length': [2, 'always', 100],
    'subject-empty': [2, 'never'],
  },
};

export default Configuration;