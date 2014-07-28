module.exports = function(callback){
	'use strict';
	var request = require('request');
	var config = require('../config');

	request(config.gist, callback);
};