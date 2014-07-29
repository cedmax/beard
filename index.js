(function(){
	'use strict';

	var express = require('express');
	var fetch = require('./modules/fetcher');
	var parser = require('./modules/parser');
	var renderer = require('./modules/renderer');

	var app = express();

	app.use('/assets', express.static(__dirname + '/assets'));

	app.get('/', function(req, res, next){
		var render = renderer(function(html){
			res.send(html);
			next();
		});

		var parse = parser(render, req.query.shaved);
		fetch(parse);
	});

	app.listen(21693);

})();