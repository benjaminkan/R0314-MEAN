var http = require("http");
var fs = require("fs");

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    http
      .get("http://omdbapi.com/?s=star+wars&apikey=cded8a70", resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          console.log(JSON.parse(data));
          for (var i = 0; i < data.length; i++) {
            response.write(data[i]);
          }

          /*var output = JSON.stringify(data);
          response.write("<table border='1'>");
          for (var i = 0; i < data.length; i++) {
            response.write("<tr>");
            response.write("<td>" + output[i].Title + "</td>");
            response.write("<td>" + output[i].Year + "</td>");
            response.write("<td>" + output[i].imdbID + "</td>");
            response.write("<td>" + output[i].Type + "</td>");
            response.write("<td>" + output[i].Poster + "</td>");
            response.write("</tr>");
          }*/
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
      });
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
