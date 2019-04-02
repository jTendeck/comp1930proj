const express = require('express');
const app     = express();
const list    = require('./public/js/data.js');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('public/html/MainPage.html' , { root : __dirname});
})

var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port

console.log('listening on port 80');
})

app.get('/ajax-GET-list', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {
        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);
    } else {
        res.send({msg: 'Wrong format!'});
    }
});