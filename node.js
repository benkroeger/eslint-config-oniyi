module.exports = {
  extends: [
    'eslint-config-oniyi',
    'eslint-config-airbnb/rules/es6'
  ].map(require.resolve),
  env: {
    browser: false,
    node: true
  },
  ecmaFeatures: {
    'jsx': false
  },
  rules: {}
};