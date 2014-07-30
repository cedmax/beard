/*global __dirname */

(function(){
	'use strict';

	var express = require('express');
	var fetch = require('./modules/fetcher');
	var logBeard = require('./modules/parseState');
	var renderer = require('./modules/renderer');

	var app = express();

	app.use('/assets', express.static(__dirname + '/assets'));

	app.get('/', function(req, res, next){
		var render = renderer(function(html){
			res.send(html);
			next();
		});
		
		fetch(logBeard(render, req.query.shaved));
	});

	app.listen(21693);

})();