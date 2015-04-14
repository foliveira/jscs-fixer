// var spawn = require('child_process').spawn
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

      // does not work on windows machines
      // spawn(jscsPath, ['--config', rcPath, '--fix', filePath])

      // execute jscs using node instead of spawning it directly
      // works on windows and provides better error handling
      var out = []
      var errors = []
      new BufferedProcess({
        command: nodePath,
        args: [jscsPath, '--config', rcPath, '--fix', filePath],
        options: { cwd: path.dirname(editor.getPath()) },
        stdout: function(msg) {
          out.push(msg)
        },
        stderr: function(msg) {
          errors.push(msg)
        },
        exit: function(code) {
          if (code === 0) {
            // everything is fine
          }
          else if (code === 1) {
            // error from jscs
            atom.notifications.addError(errors.join('\r\n'))
          }
          else if (code === 2) {
            // jscs wasn't able to resolve all issues
            atom.notifications.addWarning(out.join('\r\n'))
          }
        }
      })
    }
  }
}

module.exports = {
  activate: activate
}
