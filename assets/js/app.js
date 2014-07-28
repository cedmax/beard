$(function(){
	'use strict';
	$('a').on('click', function(evt){
		evt.preventDefault();
		var $elm = $(evt.currentTarget);
		var img = $elm.attr('href');
		$.backstretch(img);	
	});
})