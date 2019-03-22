const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/MainPage.html'));
  //__dirname : It will resolve to your project folder.
})

router.get('/mainPagecss', function(req,res){
  res.sendFile(path.join(__dirname+'/In-Season_MainPage.css'));
  //__dirname : It will resolve to your project folder.
})

router.get('/mainPageImage', function(req,res){
  res.sendFile(path.join(__dirname+'/In-Season_MainPage_background3.jpeg'));
  //__dirname : It will resolve to your project folder.
})

app.use('/', router);
app.listen(process.env.port || 8000);

console.log('Running at Port 8000');