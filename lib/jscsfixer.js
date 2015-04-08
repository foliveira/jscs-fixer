var spawn = require('child_process').spawn
var path = require('path')

function activate() {
  console.log('activate jscs-fixer')
  atom.commands.add('atom-workspace', 'jscs-fixer:fix', toggle)
}

function toggle() {
  var editor = atom.workspace.getActivePaneItem()

  if (editor && editor.getPath) {
    var filePath = editor.getPath()

    if (filePath) {
      var jscsPath = path.join(__dirname, '..', 'node_modules', 'jscs', 'bin', 'jscs')
      spawn(jscsPath, ['--fix', filePath])
    }
  }
}

module.exports = {
  activate: activate
};
