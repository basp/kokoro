/// <reference path="typings/tsd.d.ts" />

import m = require('mithril');

class Nav implements MithrilModule {
	controller() {
		
	}
	
	view(ctrl) {
		return m('div.row', [
			m('div.col-xs-offset-3.col-xs-2.text-center', [
				m('a[href="#"]', {
				}, 'Decks')
			]),
			m('div.col-xs-2.text-center', [
				m('a[href="#"]', {
					
				}, 'Add')
			]),
			m('div.col-xs-2.text-center', [
				m('a[href="#"]', {
					
				}, 'Browse')
			])
		]);
	}
}

export = Nav;