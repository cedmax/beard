module.exports = function(body, overridden){
	'use strict';
	var cheerio = require('cheerio');
	var moment = require('moment');

	var $ = cheerio.load(body);
	var lastShaved = (overridden)? moment(overridden) : moment($($('.gist-revision relative-time')[0]).attr('datetime'));
	var daysSinceShaved = moment().diff(lastShaved, 'days');

	return {
		lastShaved: {
			day: lastShaved.day(),
			month: lastShaved.month()
		},
		daysSinceShaved: daysSinceShaved
	};
};
