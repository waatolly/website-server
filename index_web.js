let http = require("http");
let fs = require("fs");
http.createServer(function(req,res){
    let html = fs.readFileSync(`${__dirname}/index.html`,"utf8");
    let date = new Date();
    html = html.replace("{DateMsg}",date);
    res.writeHead(200, {"contentType":"text/html"});
    res.end(html);
  }).listen(5678,"127.0.0.1");