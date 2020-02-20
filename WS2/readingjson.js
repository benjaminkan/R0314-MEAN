var fs = require("fs");
var http = require("http");
var data = require("./dataset.json");

data.push({
  name: "John Doe",
  age: "52",
  company: "Laurea",
  address: "Ratatie 22"
});

console.log(data);

fs.writeFile("newdataset", data, err => {
  if (err) throw err;
});

delete data[1];

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });
    response.write(data);
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
