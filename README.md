## Kokoro
Flash card application built on Electron and inspired by Anki.

### Quick start

	npm install
	tsc
	gulp dist
	cd dist
	electron .

### Build
You can build from Visual Studio Code too with `CTRL-SHIFT-B` (or just run the 
build task).

Or run `tsc` (version 1.5+) from the command line (in the root directory).

### Test
Using Jasmine latest, just go `jasmine`.

### Clean
Run `gulp clean` to get rid of all the transpiled JavaScript.

### Clean distribution
Run `gulp clean-dist` to get rid of everything generated during `gulp dist`.