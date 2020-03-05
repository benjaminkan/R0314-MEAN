var express = require("express");
var app = express();
var fs = require("fs");

app.use(express.static("public/demosite/"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/demosite/index.html");
});

app.get("/list", function(req, res) {
  res.sendFile(__dirname + "/exampledata.txt");
});

app.get("/jsondata", function(req, res) {
  var data = require("./exampledata2.json");
  res.json(data);
});

app.get("/details", function(req, res) {
  var data = require("./exampledata2.json");

  var results = '<table border="1">';

  for (var i = 0; i < data.length; i++) {
    results +=
      "<tr>" +
      "<td>" +
      data[i].Name +
      "</td>" +
      "<td>" +
      data[i].Email +
      "</td>" +
      "</tr>";
  }
  res.send(results);
});

app.get("/add", function(req, res) {
  var data = require("./exampledata2.json");

  data.push({
    Name: "Benjamin Kanerva",
    Company: "Laurea",
    Email: "benjamin@laurea.fi",
    Date: "30/3/2016 \r\n"
  });

  var jsonStr = JSON.stringify(data);

  fs.writeFile("exampledata2.json", jsonStr, err => {
    if (err) throw err;
    console.log("It's saved!");
  });

  res.send(
    "Saved the data to a file. Browse to the /details to see the contents of the file"
  );
});

app.get("*", function(req, res) {
  res.status(404).send("Cant find the requested page");
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
