var fs = require("fs");

var data1 = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');
var data3 = fs.readFileSync('example3.txt');

fs.writeFileSync('newFile2.txt', data3);
fs.appendFileSync('newFile2.txt', data1);
fs.appendFileSync('newFile2.txt', data2);
fs.appendFileSync('newFile2.txt', data3);    