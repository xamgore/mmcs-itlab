var nodestatic = require('node-static');

var fileServer = new nodestatic.Server('./dist', {cache: 31536000});

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    fileServer.serve(request, response);
  }).resume();
}).listen(80);
