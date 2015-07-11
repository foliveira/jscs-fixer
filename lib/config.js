'use babel';

import path from 'path'

export default {
  jscsPath: {
    title: 'Path to JSCS binary',
    type: 'string',
    default: path.join(__dirname, '..', 'node_modules', 'jscs', 'bin', 'jscs')
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
  esprima: {
    title: 'ES2015 and JSX Support',
    description: `Attempts to parse your ES2015 and JSX code using the
                  esprima-fb version of the esprima parser.`,
    type: 'boolean',
    default: false
  },
  esprimaPath: {
    title: 'Path to esprima parser folder',
    type: 'string',
    default: path.join(__dirname, '..', 'node_modules', 'esprima-fb')
  },
  notifications: {
    title: 'Enable editor notifications',
    description: `If enabled, notifications will be shown after each attempt
                  to fix a file. Shows both success and error messages.`,
    type: 'boolean',
    default: true
  }
}
