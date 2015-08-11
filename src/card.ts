/// <reference path="../typings/tsd.d.ts" />

import moment = require('moment');

class Card {
	constructor(front: string = '', back: string = '') {
		this.front = front;
		this.back = back;
		this.revs = 0;
		this.int = 0;
		this.ef = 2.5;
	}
	
	answer(q: number): void {
		this.revs = q > 0 ? this.revs + 1 : 1;
		switch(this.revs) {
		case 1:
			this.int = 1; 
			break;
		case 2: 
			this.int = 6;
			break;
		default:
			this.ef = Card.calculateEf(this.ef, q);
			this.int = Math.round(this.ef * this.int);
			break;
		}
	}
	
	due(): Date {
		return moment().add(this.int, 'day').toDate();
	}
	
	static calculateEf(ef: number, q: number): number {
		let newEf = ef - 0.8 + (0.28 * q) - (0.02 * q * q);
		return newEf > 1.3 ? newEf : 1.3;
	}

	front: string;
	back: string;
	ef: number;
	int: number;
	revs: number;
}

export = Card;