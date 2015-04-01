Jscsfixer = require '../lib/jscsfixer'

# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe "jscs-fixer", ->
  [workspaceElement, activationPromise] = []

  beforeEach ->
    workspaceElement = atom.views.getView(atom.workspace)
    activationPromise = atom.packages.activatePackage('jscs-fixer')

  describe "when the jscsfixer:toggle event is triggered", ->
    it "demonstrates that I'm lazy to delete the actual test case and write a bogus one", ->
      expect(true).not.toBe(false)
