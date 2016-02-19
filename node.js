module.exports = {
  extends: [
    'eslint-config-oniyi',
    'eslint-config-airbnb/rules/es6',
    'eslint-config-oniyi/rules/best-practices',
    'eslint-config-oniyi/rules/style'
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
