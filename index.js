module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    './rules/node', // overload with own node rules
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    './rules/style', // overload with own style rules
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: false,
      experimentalObjectRestSpread: false,
    },
  },
  env: {
    node: true,
  },
  globals: {},
  rules: {},
};
