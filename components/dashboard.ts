/// <reference path="../typings/tsd.d.ts" />

import m = require('mithril');
import Nav = require('./nav');
import DeckList = require('./deck-list');

var nav = new Nav();

nav.on('nav-decks', () => {
	alert('nav-decks');
});

nav.on('nav-add', () => {
	alert('nav-add');
});

nav.on('nav-browse', () => {
	alert('nav-browse');
});

var decks = new DeckList();

class Dashboard implements MithrilModule {
	controller() {
	}
	
	view(ctrl) {
		return m('div.container', [
			nav,
			m('hr'),
			decks
		]);
	}
}

export = Dashboard;