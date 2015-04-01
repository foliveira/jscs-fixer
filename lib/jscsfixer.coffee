JscsfixerView = require './jscsfixer-view'
{CompositeDisposable} = require 'atom'

module.exports = Jscsfixer =
  jscsfixerView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @jscsfixerView = new JscsfixerView(state.jscsfixerViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @jscsfixerView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'jscsfixer:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @jscsfixerView.destroy()

  serialize: ->
    jscsfixerViewState: @jscsfixerView.serialize()

  toggle: ->
    console.log 'Jscsfixer was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
