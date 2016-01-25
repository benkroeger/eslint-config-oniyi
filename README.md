>JavaScript Style Guide based on [airbnb/base](https://github.com/airbnb/javascript)

This style guide is based on the [airbnb/base](https://github.com/airbnb/javascript) javascript style
for node.js development. It extends only the __base__ config,
[react specific rules](https://github.com/airbnb/javascript/tree/master/react) are ignored.
Also, some customizations are inspired by [Roman Krejčík](https://twitter.com/farincz)'s
[article](http://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/).

## Best Practices
### [callback-return](http://eslint.org/docs/rules/callback-return): `[2, ['callback', 'next']]`
Force developers to return when they call a callback function. This is following
[RisingStack](https://risingstack.com/)'s recommendations on Node.js
[Best Practices](https://blog.risingstack.com/node-js-best-practices/)

### [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err): `[2, '^.*(e|E)rr']`
Always check for errors in callbacks - to round-up the callback convention

### [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars): `[1, {'vars': 'all', 'args': 'none' }]`
This is a warning only. In some cases, it might be totally legit to have unused vars in your
function spec - although this should be avoided

## Style
### [max-len](http://eslint.org/docs/rules/max-len) `[1, 120, 2, {ignoreComments: true}]`
Sometimes, a rule in the editor is just not enough. This rule raises a warning if a code line is 
longer than `120` characters (while comments are ignored)


## Usage

We export three ESLint configurations for your usage.

### eslint-config-oniyi

Our default export lints ES5 and below, only requires `eslint`

1. `npm install --save-dev eslint-config-oniyi eslint`
2. add `"extends": "oniyi"` to your .eslintrc

### eslint-config-airbnb/node

contains all of our default ESLint rules plus EcmaScript 6+
(recommended for [node.js](https://nodejs.org) development)

1. `npm install --save-dev eslint-config-oniyi eslint`
2. add `"extends": "oniyi/node"` to your .eslintrc

### eslint-config-airbnb/angular

contains all of our default ESLint rules plus `eslint-plugin-angular`
(recommended fpr [angular](https://angularjs.org) development). Default rules are following
[John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide)

1. `npm install --save-dev eslint-config-oniyi eslint-plugin-angular eslint`
2. add `"extends": "oniyi/angular"` to your .eslintrc


