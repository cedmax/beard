module.exports = function(beardData){
	'use strict';
	var shavedInNov = (beardData.lastShaved.month === 10);
	var shavedInLastWeekOfOct = (beardData.lastShaved.month === 9 && beardData.lastShaved.day > 23);
	var isItTooLate = beardData.daysSinceShaved < 40;

	return (shavedInNov || shavedInLastWeekOfOct) && !isItTooLate;
};