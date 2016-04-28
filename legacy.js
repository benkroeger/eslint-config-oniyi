module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    './rules/best-practices', // overload with own best-practices
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/legacy',
    'eslint-config-airbnb-base/rules/style',
    './rules/style', // overload with own style
    'eslint-config-airbnb-base/rules/variables',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  rules: {}
};
