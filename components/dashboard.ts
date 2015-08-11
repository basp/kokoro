/// <reference path="../typings/tsd.d.ts" />

import m = require('mithril');
import Nav = require('./nav');
import DeckList = require('./deck-list');

class Dashboard implements MithrilModule {
	controller() {
	}
	
	view(ctrl) {
		return m('div.container', [
			new Nav(),
			m('hr'),
			new DeckList()
		]);
	}
}

export = Dashboard;