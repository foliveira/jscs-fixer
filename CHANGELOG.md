## 1.0.0 - Rewrite
* Rewrote the package using ES2015 (Babel)
* ES2015 and JSX fix support based on esprima-fb
* Uses Atom native notifications (need to enable in package settings)
* Uses BufferedNodeProcess instead of BufferedProcess

## 0.9.0 - JSX and Notifications
* Add support for JSX files
* Add warning when fixing a not yet saved file

## 0.5.0
* Fix bug on settings view
* Add setting option for JSCS binary location

## 0.4.0
* Add settings view for default preset and ES2015 mode

## 0.2.7
* Uses `.jscsrc` file located on project root

## 0.2.4 - With config
* Invoking `jscs` straight from _node_modules_

## 0.2.2 - First Release
* Fixes a file using jscs --fix
