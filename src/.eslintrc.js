const config = require('../config.json')

const globals = {}
Object.keys(config.globals).forEach(k => globals[k] = true)

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-restricted-syntax': 0,
    'semi': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': 0,
    'react/require-default-props': 0
  },
  globals: globals
}