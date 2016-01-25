module.exports = {
  extends: [
    'eslint-config-oniyi',
    'eslint-config-oniyi/rules/angular'
  ].map(require.resolve),
  env: {
    browser: true,
    node: false
  },
  rules: {
    'no-use-before-define': 0,
    // disable requiring trailing commas for angular.js development
    // because some browsers have problems with it (at least IE8)
    'comma-dangle': 0
  }
};
