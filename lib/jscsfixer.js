'use babel';

import path from 'path'
import fs from 'fs'
import {BufferedNodeProcess} from 'atom'
import config from './config'

export default {
  config,
  activate() {atom.commands.add('atom-workspace', 'jscs-fixer:fix', fixFile)}
}

const fixFile = () => {
  const [rootDir] = atom.project.getPaths()
  const editor = atom.workspace.getActiveTextEditor()
  const configuration = atom.config.get('jscs-fixer')

  if (rootDir && (editor && editor.getPath)) {
    let filePath = editor.getPath()
    let rulesFilePath = path.join(rootDir, '.jscsrc')

    if (!filePath) {
      return atom.notifications.addWarning('Save the file before fixing it.',
                                    {dismissable: true})
    }

    let command = configuration.jscsPath
    let args = [`${filePath}`, '--fix']
    let options = {cwd: path.dirname(filePath)}

    if (fs.existsSync(rulesFilePath)) {
      args.push(`--config ${rulesFilePath}`)
    } else {
      args.push(`--preset=${configuration.defaultPreset}`)
    }

    if (atom.config.get('jscs-fixer.esprima')) {
      args.push(`--esprima=${configuration.esprimaPath}`)
    }

    new BufferedNodeProcess({command, args, options, stdout, stderr, exit})
  }
}

const stdout = (msg) => {
  if (atom.config.get('jscs-fixer.notifications')) {
    atom.notifications.addWarning(msg, {dismissable: true})
  }
}
const stderr = (msg) => {
  if (atom.config.get('jscs-fixer.notifications')) {
    atom.notifications.addError(msg, {dismissable: true})
  }
}
const exit = (code) => {
  if (atom.config.get('jscs-fixer.notifications') && code === 0) {
    atom.notifications.addInfo('File Fixed', {dismissable: true})
  }
}
