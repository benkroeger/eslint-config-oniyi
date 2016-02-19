module.exports = {
  extends: [
    'eslint-config-airbnb/rules/best-practices',
    'eslint-config-airbnb/rules/errors',
    'eslint-config-airbnb/rules/legacy',
    'eslint-config-airbnb/rules/style',
    'eslint-config-airbnb/rules/variables'
  ].map(require.resolve),
  env: {
    browser: false,
    node: false,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
