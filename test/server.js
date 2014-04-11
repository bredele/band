var band = require('..');
var worker = require('./worker');

band(function() {
	worker();
}, 10);

// break my computer
// band('worker');