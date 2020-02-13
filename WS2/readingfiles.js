var fs = require("fs");



fs.readFile('example.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

fs.readFile('example2.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});