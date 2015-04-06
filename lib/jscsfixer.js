var CompositeDisposable = require('atom')
var spawn = require('child_process').spawn
var path = require('path')

function activate() {
  atom.commands.add('atom-workspace', 'jscs-fixer:fix', toggle)
}

function toggle() {
  var editor = atom.workspace.getActivePaneItem()

  if (editor) {
    var path = editor.getPath()
    var jscsPath = path.join(__dirname, 'node_modules', 'jscs', 'bin')
    var child = spawn('/usr/local/bin/node', [jscsPath, 'jscs', '-x', path])
  }
}

module.exports = {
  activate: activate
};
