
var http = require('http'); // require http module
var fs = require('fs'); // require http module
var url = require('url'); // require http module

http.createServer(function (req, res) {
	var q = url.parse(req.url,true);
	var filename = "." + q.pathname;

	if(filename == './') {
		filename = './index.html';
	}
	fs.readFile(filename,function(err,data) {
		if(err){
	res.writeHead(404, {'Content-Type':'text/html'});
	return res.end("404 Not found");

		}
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(data);
	console.log("..Incoming Request..." + req.url);
	return res.end();
})
}).listen(8080);

console.log('Server listening on port 8080');