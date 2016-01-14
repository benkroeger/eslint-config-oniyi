module.exports = {
  'extends': [
    'eslint-config-airbnb/base',
    'eslint-config-oniyi/rules/best-practices',
    'eslint-config-oniyi/rules/style'
  ].map(require.resolve),
  rules: {}
};
