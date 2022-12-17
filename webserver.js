let http = require("http");
let fs = require("fs");
http.createServer(function(req,res){ 
  let html = fs.readFileSync(`${__dirname}/index.html`); 
  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
  res.end("Hello~\nI'm olly come from taiwan\nThis is my first websiteserver\n鏈鋸人好看-------我愛瑪其瑪");
}).listen(1234,"127.0.0.1");