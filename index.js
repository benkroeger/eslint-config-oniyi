module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    './rules/errors', // overload with own errors rules
    'eslint-config-airbnb-base/rules/node',
    './rules/node', // overload with own node rules
    'eslint-config-airbnb-base/rules/style',
    './rules/style', // overload with own style rules
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/imports',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
    },
  },
};
