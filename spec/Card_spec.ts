/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../typings/moment/moment.d.ts" />

import Card = require('../card');
import moment = require('moment');

describe('Card', () => {
	var card: Card;
	
	beforeEach(() => {
		card = new Card();
	});
	
	it('starts out with zero reviews', () => {
		expect(card.revs).toBe(0);
	});
	
	it('tracks the number of reviews', () => {
		card.answer(1);			
		expect(card.revs).toBe(1);	
	});

	it('starts out immediately due for review', () => {
		let due = card.due();
		expect(moment().isSame(due, 'day')).toBeTruthy();
	});
	
	it('has a first review interval of one day', () => {
		card.answer(1);
		let expected = moment().add(1, 'day');
		let due = moment(card.due());
		expect(expected.isSame(due, 'day')).toBeTruthy();
	});
	
	it('has a second review interval of six days', () => {
		card.answer(1);
		card.answer(1);
		let expected = moment().add(6, 'day');
		let due = moment(card.due());
		expect(expected.isSame(due, 'day')).toBeTruthy();
	});
});