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
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
    },
  },
};
