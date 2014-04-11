var http = require('http');

/**
 * Expose 'worker'
 */

module.exports = function() {
  console.log('worker');
  http.Server(function(req,res) {
      res.writeHead(200);
      res.end('hello world\n')
    }).listen(8000);
};