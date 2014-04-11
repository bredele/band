
/**
 * Modules dependencies.
 * @api private
 */

var cluster = require('cluster');
var length = require('os').cpus().length;

/**
 * Expose 'band'
 */

module.exports = band;


/**
 * band constructor.
 * @api public
 */

function band(cb) {
	if(cluster.isMaster) {
		while(length--) {
			cluster.fork();
		}
	} else {
		cb();
	}
}
