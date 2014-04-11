var http = require('http');

/**
 * Expose 'worker'
 */

module.exports = function() {
  http.Server(function(req,res) {
      res.writeHead(200);
      res.end('hello world\n');
    }).listen(8000);
};