'use strict';

module.exports = {
  rules: {
    // disallow use of variables and classes but not functions before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  },
};
