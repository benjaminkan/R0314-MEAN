var fs = require("fs");

fs.readdir('/mean', function (err, data) {
    if (err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());
    console.log(data);
});
