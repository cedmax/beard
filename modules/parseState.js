module.exports = function(callback, overridden){
	'use strict';
	var states = require('../config').states;
	var isMovember = require('./checkMovember');
	var parser = require('./parsePage');

	return function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var beardData = parser(body, overridden);
			
			if (isMovember(beardData)){
				callback('movember');
				return;
			} 
	
			var matches = states.filter(function(daysPassed){
				return beardData.daysSinceShaved < daysPassed[0];
			});

			callback(matches[0][1]);

		} else {
			callback();
		}
	};
};