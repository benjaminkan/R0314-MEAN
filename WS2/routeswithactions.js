let http = require("http");
let fs = require("fs");
http
  .createServer(function(request, response) {
    var content = "";
    var type = "";
    if (request.url === "/") {
      content = fs.readFileSync("./home.html");
      type = "text/html";
    } else if (request.url === "/frontpage") {
      content = fs.readFileSync("./frontpage.html");
      type = "text/html";
    } else if (request.url === "/contact") {
      content = fs.readFileSync("./contact.html");
      type = "text/html";
    } else if (request.url === "/plaintext") {
      content = fs.readFileSync("./plaintext.txt");
      type = "text/plain";
    } else if (request.url === "/json") {
      content = fs.readFileSync("./sampledata.json");
      type = "application/json";
    }

    response.writeHead(200, { "Content-Type": type });
    response.end(content + "\n");
  })
  .listen(8081);
