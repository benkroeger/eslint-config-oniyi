module.exports = {
  extends: [
    'eslint-config-airbnb/rules/best-practices',
    'eslint-config-airbnb/rules/errors',
    'eslint-config-airbnb/rules/legacy',
    'eslint-config-airbnb/rules/style',
    'eslint-config-airbnb/rules/variables',
    'eslint-config-oniyi/rules/best-practices',
    'eslint-config-oniyi/rules/style'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
