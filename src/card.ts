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
	
	// This will mark a card as _answered_ and calculate the new review
	// interval. During the first two revisions (`revs`) the interval
	// (`int`) will be fixed to either `1` or `6` (we can configure this
	// later).
	//
	// The value `q` is the quality of the answer:
	// 
	// * 0 - complete black out
	// * 1 - barely remembered
	// * 2 - rememberd quite easily
	// * 3 - ingrained
	//
	// Everything above 3 is normalized to 3.
	//
	answer(q: number): void {
		q = q <= 3 ? q : 3;
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
	
	// This is just a straight translation from the formula described in the
	// SM2 algorithm. See http://www.supermemo.com/english/ol/sm2.htm.
	//
	// The ease-factor (`ef`) will influence the interval between revisions.
	// The more a card is answered correctly, the bigger the `ef` will get 
	// which means there will be a longer interval between reviews. 
	//
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