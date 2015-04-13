var spawn = require('child_process').spawn
var path = require('path')

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

      spawn(jscsPath, ['--config', rcPath, '--fix', filePath])
    }
  }
}

module.exports = {
  activate: activate
}
