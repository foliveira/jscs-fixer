'use strict;'

var path = require('path')

exports = module.exports = {
  jscsPath: {
    title: 'Path to JSCS binary',
    type: 'string',
    default: path.join(__dirname,
                        '..',
                        'node_modules',
                        'jscs',
                        'bin',
                        'jscs')
  },
  defaultPreset: {
    title: 'Default preset',
    description: 'What preset to use if no rules file is found.',
    enum: [
      'airbnb',
      'crockford',
      'google',
      'grunt',
      'jquery',
      'mdcs',
      'wikimedia',
      'yandex'
    ],
    type: 'string',
    default: 'google',
  },
  harmony: {
    title: 'ES2015 Support',
    description: 'Attempts to parse your ES2015 code using the harmony ' +
                  'version of the esprima parser.',
    type: 'boolean',
    default: false
  },
  jsx: {
    title: 'JSX Support',
    description: 'Attempts to parse your JSX code using the esprima-fb ' +
                  'version of the esprima parser.',
    type: 'boolean',
    default: false
  }
}
