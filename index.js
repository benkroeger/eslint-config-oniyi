'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/errors', // overload with own errors rules
    './rules/node', // overload with own node rules
    './rules/style', // overload with own style rules
    './rules/variables', // overload with own style rules
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2016,
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
    },
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
      },
      rules: {
        extends: 'plugin:ava/recommended',
        plugins: ['ava'],
        rules: {
          'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
      },
    },
  ],
};
