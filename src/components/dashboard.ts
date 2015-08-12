/// <reference path="../../typings/tsd.d.ts" />

import m = require('mithril');
import Nav = require('./nav');
import DeckList = require('./deck-list');
import CardForm = require('./card-form');

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

var deckList = new DeckList();
var cardForm = new CardForm();

class Dashboard implements MithrilModule {
	controller() {
	}
	
	view(ctrl) {
		return m('div', [
			nav,
			m('hr'),
			cardForm
		]);
	}
}

export = Dashboard;