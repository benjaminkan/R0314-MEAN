var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/demosite/index.html');
});

app.get('/list', function (req, res) {
    res.sendFile(__dirname + '/exampledata.txt');
});

app.get('/jsondata', function (req, res) {
    var data = require('./exampledata2.json');
    res.json(data);
});

app.get('/details', function (req, res) {
    var data = require('./exampledata2.json');
    
    var results = '<table border="1">';

    for (var i=0; i < data.length; i++){
        results +=
        '<tr>'+
        '<td>'+data[i].Name+'</td>'+
        '<td>'+data[i].Email+'</td>'+
        '</tr>';
    }
    res.send(results);
});

app.get('/add', function (req, res) {
    res.send('Lets try to add some data to a file!');
});

app.get('*', function (req, res) {
    res.status(404).send('Cant find the requested page');
});

app.listen(8080, function() {
console.log('Example app listening on port 8080!');
});