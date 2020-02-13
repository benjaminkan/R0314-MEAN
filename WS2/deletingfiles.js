var fs = require("fs");

fs.unlink('newFile2.txt', function (err) {
    if (err) throw err;

    console.log('File deleted!');
});