/// <reference path="typings/tsd.d.ts" />

import m = require('mithril');
import Dashboard = require('./dashboard');

var root = {
	controller: () => {},
	view: () => {
		return m('div.container', new Dashboard());
	}
};

m.module(document.body, root);