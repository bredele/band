
/**
 * Modules dependencies.
 * @api private
 */

var cluster = require('cluster');
var resolve = require('path').resolve;
var length = require('os').cpus().length;
var debug = require('debug')('band');


/**
 * Expose 'band'
 */

module.exports = band;


/**
 * band constructor.
 * @api public
 */

function band(cb, nb) {
  if(cluster.isMaster) {
    var l = (length > nb) ? nb : length;
    while(l--) {
      var worker = cluster.fork();
      worker.on('message', function(msg) {
        console.log(msg);
      });
    }

  } else {
    cb();
    // setInterval(function report() {
    //  process.send({
    //    memory: process.memoryUsage(),
    //    process: process.pid
    //  });
    // }, 1000)
  }
}

cluster.on('death', function() {
  debug('worker dead');
  cluster.fork();
});

cluster.on('online', function(worker) {
  debug('worker running %s', worker.id);
});

cluster.on('fork', function(worker) {
  debug('fork worker %s', worker.id);
});

cluster.on('listening', function(worker, address) {
  console.log("A worker is now connected to " + address.address + ":" + address.port);
});