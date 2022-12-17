let http = require("http");
let fs = require("fs");
http.createServer(function(req,res){
  let html = fs.readFileSync(`${__dirname}/index.html`,"utf8");
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.end("Hello~\n");
}).listen(1234,"127.0.0.1");