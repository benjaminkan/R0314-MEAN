var fs = require("fs");

fs.mkdir('/mean/newdata', { recursive: true}, (err) => {
    if (err) throw err;
});