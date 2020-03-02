var http = require("http");
var fs = require("fs");
var axios = require("axios");

http
  .createServer(function(request, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    const promise = axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Liverpool"
      )
      .then(response => {
        const data = response.data;
        console.log(data);
        var html = parse(data);
        res.write(html);
      });
    console.log(promise);
  })
  .listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
function parse(data) {
  var html = "<table border='1'>";
  for (var i = 0; i < 10; i++) {
    html += "<tr>";
    html += "<td>" + data[i].strTeam + "</td>";
    html += "<td>" + data[i].intFormedYear + "</td>";
    html += "<td>" + data[i].strLeague + "</td>";
    html += "</tr>";
  }
  html += "</table>";
  return html;
}
