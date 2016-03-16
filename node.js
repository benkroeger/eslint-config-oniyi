module.exports = {
  extends: [
    'eslint-config-oniyi',
    'eslint-config-airbnb/rules/node',
    // re-apply style and variables (node rules are loaded before style and variables in the eslint-config-airbnb as well)
    'eslint-config-airbnb/rules/style',
    // overload with own style
    'eslint-config-oniyi/rules/style',
    'eslint-config-airbnb/rules/variables',
    'eslint-config-airbnb/rules/es6',
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
