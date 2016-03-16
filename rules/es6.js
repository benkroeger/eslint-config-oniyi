module.exports = {
  'rules': {
    'arrow-body-style': [2, "always"],
    // http://eslint.org/docs/rules/prefer-rest-params
    // disable rest params rule, since rest params are not supported in node 4.4.0 and we're not using babel
    'prefer-rest-params': 0,
  }
};
