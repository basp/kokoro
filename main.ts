var app = require('app'),
	BrowserWindow = require('browser-window'),
	path = require('path');

var INDEX = 'file://' + path.join(__dirname, 'index.html');
	
var mainWindow = null;

app.on('window-all-closed', function () {
	app.quit();
});

app.on('ready', function () {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Sandbox'
	});
	
	mainWindow.loadUrl(INDEX);
	
	mainWindow.on('close', function () {
		mainWindow = null;
	});
});