// Create web server 
// Create a web server that listens on port 3000 and serves the comments.html file. 
// The comments.html file should be in the same directory as the comments.js file.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/comments.html').pipe(res);
}).listen(3000);