var CompositeDisposable = require('atom')
var spawn = require('child_process').spawn

function activate() {
  atom.commands.add('atom-workspace', 'jscsfixer:toggle', toggle)
}

function toggle() {
  var editor = atom.workspace.getActivePaneItem()

  if (editor) {
    var path = editor.getPath()
    var child = spawn('/usr/local/bin/node', ['/usr/local/bin/jscs', '-x', path])
  }
}

module.exports = {
  activate: activate
};
