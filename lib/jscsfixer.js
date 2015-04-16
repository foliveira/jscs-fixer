var path = require('path')
var BufferedProcess = require('atom').BufferedProcess

var nodePath = path.join(atom.packages.getApmPath(), '..', 'node')

function activate() {
  console.log('activate jscs-fixer')
  atom.commands.add('atom-workspace', 'jscs-fixer:fix', toggle)
}

function toggle() {
  var editor = atom.workspace.getActivePaneItem()
  var rootDirs = atom.project.rootDirectories

  if ((rootDirs && rootDirs.length > 0) || (editor && editor.getPath)) {
    var filePath = editor.getPath()
    var rootDir = rootDirs[0]

    if (filePath) {
      var rcPath = path.join(rootDir.path, '.jscsrc')
      var jscsPath = path.join(__dirname, '..', 'node_modules',
                              'jscs', 'bin', 'jscs')

      new BufferedProcess({
        command: nodePath,
        args: [jscsPath, '--config', rcPath, '--fix', filePath],
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
    }
  }
}

module.exports = {
  activate: activate
}
