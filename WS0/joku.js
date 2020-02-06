var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (request.url === "/") {
      response.write("Olet saapunut palvelimen juureen.");
    } else if (request.url === "/helloworld") {
      response.write("Nyt yrität hakea Hei Maailmaa!");
    } else if (request.url === "/homepage") {
      response.write("<h1>HOMEPAGE</h1>");
    }

    response.write(`<style>
table, th, td {
	border: 1px solid black;
	border-collapse: collapse;
}
<br><br><br>
</style>
<table>
<tr>
	<th>Name</th>
	<th>Address</th>
	<th>City</th>
</tr>
<tr>
	<td>Matti Meikalainen</td>
	<td>Timotie 1, as 10</td>
	<td>Tampere</td>
</tr>
<tr>
	<td>Maija Virtanen</td>
	<td>Asematie 12</td>
	<td>Kiljava</td>
</tr>
</table>
`);
    response.end("<h1>Hello World</h1>");
  })
  .listen(8081);
