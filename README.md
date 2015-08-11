## kokoro
Flash card application built on Electron and inspired by Anki.

	npm install
	tsc
	gulp dist
	cd dist
	electron .

Run `gulp clean` to get rid of all the transpiled JavaScript and distribution
directory. 

Run tests with `jasmine`.

Oh, and you can build from Visual Studio Code too with `CTRL-SHIFT-B` (or just
run the build task).