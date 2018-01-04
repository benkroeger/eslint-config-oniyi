'use strict';

module.exports = {
  rules: {
    'callback-return': [2, ['cb', 'callback', 'next', 'done']],
    'handle-callback-err': [2, '^.*(e|E)rr'],
  },
};
