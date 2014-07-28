module.exports = function(callback){
	'use strict';
	var states = require('../config').states;
	var cheerio = require('cheerio');

	return function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
			var value = $('#file-beard-LC1').text();
			callback(states[value]);
		} else {
			callback();
		}
	};
};