
var http = require('http'); // require http module
var url = require('url'); // require http module

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	var q = url.parse(req.url, true).query;
	var dates = q.year;

	//res.write(req.url);
	res.end(dates);
}).listen(8080);