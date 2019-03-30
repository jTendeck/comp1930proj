var express = require('express');
var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('public/html/MainPage.html' , { root : __dirname});
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

console.log('listening on port 8081');
})