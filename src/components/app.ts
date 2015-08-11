/// <reference path="../../typings/tsd.d.ts" />

import m = require('mithril');
import Dashboard = require('./dashboard');
import Container = require('./container');

class App implements MithrilModule {
	controller() {	
	}
	
	view(ctrl): MithrilVirtualElement {
		return m('div', [ new Dashboard() ])
	}
}

export = App;