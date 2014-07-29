module.exports = function(callback, overridden){
	'use strict';
	var states = require('../config').states;
	var cheerio = require('cheerio');
	var moment = require('moment');

	return function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
			var lastShaved = (overridden)? moment(overridden) : moment($($('.revision time')[0]).attr('datetime'));
			var daysSinceShaved = moment().diff(lastShaved, 'days');
			
			if (lastShaved.month()===10 || lastShaved.month()===9 && daysSinceShaved<7){
				callback(states.movember);
				return;
			} 
	
			var myBeardIs;
			switch (true) {
				case (daysSinceShaved < 7):
					myBeardIs = 'shaved';
					break;
				case (daysSinceShaved < 30):
					myBeardIs = 'growing';
					break;
				case (daysSinceShaved < 120):
					myBeardIs = 'awesome';
					break;
				default:
					myBeardIs = 'overtaking';
					break;	
			}

			callback(states[myBeardIs]);
		} else {
			callback();
		}
	};
};