/// <reference path="../../typings/tsd.d.ts" />

import m = require('mithril');

class Container implements MithrilModule {
	constructor(contents: any = []) {
		
	}
	
	controller() {
		
	}
	
	view(ctrl) {
		return m('div.container', this.contents);
	}
	
	private contents: any;
}
 