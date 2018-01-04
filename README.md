> JavaScript Style Guide based on [airbnb/base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

This style guide is based on the [airbnb/base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) javascript style
for `node.js` development.
Also, some customizations are inspired by [Roman Krejčík](https://twitter.com/farincz)'s
[article](http://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/).

## Best Practices
### [callback-return](http://eslint.org/docs/rules/callback-return): `[2, ['callback', 'next']]`
Force developers to return when they call a callback function. This is following
[RisingStack](https://risingstack.com/)'s recommendations on Node.js
[Best Practices](https://blog.risingstack.com/node-js-best-practices/)

### [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err): `[2, '^.*(e|E)rr']`
Always check for errors in callbacks - to round-up the callback convention

## Style
### [max-len](http://eslint.org/docs/rules/max-len) `[1, 120, 2, {ignoreComments: true}]`
Sometimes, a rule in the editor is just not enough. This rule raises a warning if a code line is
longer than `120` characters (while comments are ignored)

## Variables

### [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) `['error', { functions: false, classes: true, variables: true }]`
disallow use of variables and classes but not functions before they are defined.

Also see [Risingstack's Post on clean code](https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/).

## Usage

Our default export lints ES2016 and below, only requires `eslint`.
Check [node.green](http://node.green/#ES2016) for your node's version compatibility with ES2016.

1. `npm install --save-dev eslint-config-oniyi eslint`
2. add `"extends": "oniyi"` to your `.eslintrc.js`
