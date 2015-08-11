/// <reference path="../typings/tsd.d.ts" />

import Card = require('./card');

class Deck {
	constructor(name: string, cards: Card[] = []) {
		this.name = name;
		this.cards = cards;
	}
	
	name: string;
	cards: Card[];
}

export = Deck;