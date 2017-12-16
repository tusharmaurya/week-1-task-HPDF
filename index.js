//node index.js
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs");
var request = require('request');

app.get('/', function (req, res) {
  res.send('Hello World - Tushar');
});

var cookie_name = "Tushar";
var cookie_value = 21;


var author,count1,count2,article;
app.get("/authors",function(req,res){
     var w="<html><ol>";
  request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    author = JSON.parse(body);
    count1 = author.length;
  });
  request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
    console.log('error:',error);
    console.log('statusCode:',response && response.statusCode);
    article = JSON.parse(body);
    count2 = article.length;
  });
  for(var i=0;i<count1;i++){
    var count3=0;
    for(var j=0;j<count2;j++){
      if(article[j].userId=== (i+1)){
        count3++;
      }
    }
    var m = author[i].name;
    w=w+`<li> ${m}: ${count3}</li>`;
  };
  w=w+"</ol></html>";
  res.send(w);
});

app.get('/setCookie',function (req, res){
     res.cookie(cookie_name , cookie_value).send('Cookie is set');
});

app.get('/getCookie', function (req, res) {
  console.log("Cookies :  ", req.cookies);
});

var robotsResponse = "denied";
app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send(robotsResponse);
});

var pagePath = '/html/page.html';
app.get('/html', function (req, res) {
    res.sendFile(pagePath,  {root: __dirname });
});	

var formPath = '/html/form.html'
app.get('/input', function (req, res) {
   res.sendFile(formPath,  {root: __dirname } );
});

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      input_text:req.body.input_text
   };
   console.log(response);
   res.end(JSON.stringify(response));
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

