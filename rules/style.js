module.exports = {
  'rules': {
    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': [1, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
  }
};
