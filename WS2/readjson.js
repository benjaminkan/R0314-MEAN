var http = require("http");
var fs = require("fs");

var contents = require("./sampledata.json");

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<table border='1'>");
    for (var i = 0; i < contents.length; i++) {
      response.write("<tr>");
      response.write("<td>" + contents[i].name + "</td>");
      response.write("<td>" + contents[i].age + "</td>");
      response.write("<td>" + contents[i].company + "</td>");
      response.write("<td>" + contents[i].address + "</td>");
      response.write("</tr>");
    }
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");

// 9a
/*
for (var i = 0; i < contents.length; i++) {
  console.log(contents[i].name);
  console.log(contents[i].age);
  console.log(contents[i].company);
  console.log(contents[i].address);
}
*/

//9b
/*
console.log("<table border='1'>");
for (var i = 0; i < contents.length; i++) {
  console.log("<tr>");
  console.log("<td>" + contents[i].name + "</td>");
  console.log("<td>" + contents[i].age + "</td>");
  console.log("<td>" + contents[i].company + "</td>");
  console.log("<td>" + contents[i].address + "</td>");
  console.log("</tr>");
}
*/
