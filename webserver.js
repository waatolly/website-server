let http = require("http");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.end("Hello~\n");
}).listen(1234,"127.0.0.1");