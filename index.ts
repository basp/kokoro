/// <reference path="typings/tsd.d.ts" />

import m = require('mithril');
import Card = require('./card');

var app = {};

class Dashboard {
	controller() {
		return { card: new Card() };
	}
	
	view(ctrl) {
		let dates = [];
		for(var i = 0; i < 5; i++) {
			dates.push(ctrl.card.due());
			ctrl.card.answer(1);
		}		
		let items = dates.map(x => m('li', x));
		return m('ul', items);
	}
}

m.module(document.body, new Dashboard());