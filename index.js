module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    './rules/best-practices', // overload with own best-practices rules
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    './rules/style', // overload with own style rules
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      'jsx': false,
    },
  },
  env: {
    node: true,
  },
  globals: {},
  rules: {},
};
