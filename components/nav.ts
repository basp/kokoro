/// <reference path="../typings/tsd.d.ts" />

import m = require('mithril');
import {EventEmitter} from 'events';

class Nav extends EventEmitter implements MithrilModule {
	controller() {
		
	}
	
	view(ctrl) {
		return m('div.row', [
			m('div.col-xs-offset-3.col-xs-2.text-center', [
				m('a[href="#"]', { 
					onclick: this.emit.bind(this, 'nav-decks') 
				}, 'Decks')
			]),
			m('div.col-xs-2.text-center', [
				m('a[href="#"]', { 
					onclick: this.emit.bind(this, 'nav-add') 
				}, 'Add')
			]),
			m('div.col-xs-2.text-center', [
				m('a[href="#"]', { 
					onclick: this.emit.bind(this, 'nav-browse') 
				}, 'Browse')
			])
		]);
	}
}

export = Nav;