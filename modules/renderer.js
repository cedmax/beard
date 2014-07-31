/*global __dirname */

module.exports = function(callback, url){
	'use strict';
	var ga = require('../config').ga;

	return function(state){
		var mustache = require('mustache');
		var fs = require('fs');
		var template = fs.readFileSync(__dirname + '/../view/index.mustache').toString();
		
		callback(mustache.to_html(template, {
			state: (state?state:null),
			url: url,
			ga: ga
		}));
	};
};