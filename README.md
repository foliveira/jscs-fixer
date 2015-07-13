# jscs-fixer

Fixes a file using your project's `.jscsrc` rules file and the --fix switch on `jscs`

## Getting Started
Install the module with: `apm install jscs-fixer`

Alternatively use Settings → Install → Search for `jscs-fixer` inside the editor.

## Supports

* Vanilla Javascript (ES5)
* ES2015 (previously known as ES6/Harmony)
* JSX

ES2015 and JSX support is based on the [esprima-fb](https://github.com/facebook/esprima) parser and can be toggled in the settings pane.

## Usage

* Check the settings pane for package options.

* Invoke the command using any of the options below:
  1. Use the keyboard shortcut - <kbd>ctrl</kbd>+<kbd>⌂</kbd>+<kbd>J</kbd>
  2. Right click on one a file editor and choose `Fix this file using jscs`
  3. From Command Palette (<kbd>⌘</kbd>+<kbd>⌂</kbd>+<kbd>P</kbd>) invoke `Jscs Fixer: Fix`

![jscs-fixer](https://cldup.com/Rmg6zIa3kS.gif)

#### Notes

To get linting support, you will need this package: https://atom.io/packages/linter-jscs

## License
Copyright (c) 2015 Fábio Oliveira. Licensed under the MIT license.
