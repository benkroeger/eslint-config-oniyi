module.exports = {
  'rules': {
    'callback-return': [2, ['callback', 'next', 'done']],
    'handle-callback-err': [2, '^.*(e|E)rr'],
    'no-unused-vars': [1, {
      'vars': 'all',
      'args': 'none'
    }]
  }
};
