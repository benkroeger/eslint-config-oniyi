module.exports = {
  'extends': [
    'eslint-config-airbnb/base',
    'eslint-config-oniyi/rules/best-practices'
  ].map(require.resolve),
  rules: {}
};
