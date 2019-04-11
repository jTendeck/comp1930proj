const express = require('express');
const app     = express();
const lists   = require('./public/js/data.js');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('public/html/comp1712-recipe-template.html' , { root : __dirname});
})

var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port

console.log('listening on port 80');
})

app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'application/json');
    let d = new Date();

    res.send({ msg: d });

})

app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);

    } else if(formatOfResponse == 'html-list2') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML2();
        res.send(dataList);

    } else if(formatOfResponse == 'html-list3') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML3();
        res.send(dataList);

    } else if(formatOfResponse == 'html-list4') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML4();
        res.send(dataList);

    } else if(formatOfResponse == 'html-list5') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML5();
        res.send(dataList);

    } else if(formatOfResponse == 'table1') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getTable1();
        console.log("Success!");
        res.send(dataList);


    } else if(formatOfResponse == 'table2') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getTable2();
        console.log("Success!");
        res.send(dataList);

    } else if(formatOfResponse == 'table3') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getTable3();
        console.log("Success!");
        res.send(dataList);

    } else if(formatOfResponse == 'table4') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getTable4();
        console.log("Success!");
        res.send(dataList);

    } else if(formatOfResponse == 'table5') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getTable5();
        console.log("Success!");
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});
