'use strict;'

var path = require('path')
var fs = require('fs')
var BufferedProcess = require('atom').BufferedProcess
var nodePath = path.join(atom.packages.getApmPath(), '..', 'node')

function activate() {
  console.log('activate jscs-fixer')
  atom.commands.add('atom-workspace', 'jscs-fixer:fix', toggle)
}

function toggle() {
  var editor = atom.workspace.getActivePaneItem()
  var rootDirs = atom.project.rootDirectories
  var jscsArgs = []

  if ((rootDirs && rootDirs.length > 0) || (editor && editor.getPath)) {
    var filePath = editor.getPath()
    var rootDir = rootDirs[0]

    if (filePath) {
      var rcPath = path.join(rootDir.path, '.jscsrc')
      var jscsPath = atom.config.get('jscs-fixer.jscsPath')

      jscsArgs.push(jscsPath)

      if (fs.existsSync(rcPath)) {
        jscsArgs.push('--config')
        jscsArgs.push(rcPath);
      } else {
        jscsArgs.push('--preset')
        jscsArgs.push(atom.config.get('jscs-fixer.defaultPreset'))
      }

      jscsArgs.push('--fix')
      jscsArgs.push(filePath)

      if (atom.config.get('jscs-fixer.jsx')) {
        var esprimaPath = path.join(__dirname,
                            '..',
                            'node_modules',
                            'esprima-fb')
        jscsArgs.push('--esprima=' + esprimaPath)
      }

      if (atom.config.get('jscs-fixer.harmony')) {
        jscsArgs.push('--esnext')
      }

      new BufferedProcess({
        command: nodePath,
        args: jscsArgs,
        options: {
          cwd: path.dirname(filePath)
        },
        stdout: function(msg) {
          console.warn(msg)
        },
        stderr: function(msg) {
          console.error(msg)
        },
        exit: function(code) {
          if (code === 0) {
            console.log(filePath + ' fixed')
          }
        }
      })
    } else {
      atom.notifications.addWarning('Please save the file before fixing it.',
                                    {dismissable: true})
    }
  }
}

module.exports = {
  config: require('./config'),
  activate: activate
}
