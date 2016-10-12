'use babel';

import path from 'path'

export default {
  jscsPath: {
    title: 'Path to JSCS binary',
    type: 'string',
    default: path.join(__dirname, '..', 'node_modules', 'jscs', 'bin', 'jscs')
  },
  jscsConfigPath: {
    title: 'Path to custom .jscsrc file',
    type: 'string',
    default: path.join(__dirname, '~/', '.jscsrc')
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
      'node-style-guide',
      'wikimedia',
      'yandex'
    ],
    type: 'string',
    default: 'google',
  },
  babel: {
    title: 'ES2015 and JSX Support',
    description: `Attempts to parse your ES2015 and JSX code using the
                  babel-jscs package.`,
    type: 'boolean',
    default: false
  },
  babelPath: {
    title: 'Path to babel-jscs folder',
    type: 'string',
    default: path.join(__dirname, '..', 'node_modules', 'babel-jscs')
  },
  notifications: {
    title: 'Enable editor notifications',
    description: `If enabled, notifications will be shown after each attempt
                  to fix a file. Shows both success and error messages.`,
    type: 'boolean',
    default: true
  }
}
