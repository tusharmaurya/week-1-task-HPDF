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

var url1='https://jsonplaceholder.typicode.com/users';
var url2='https://jsonplaceholder.typicode.com/posts';

var authorArr = [];
var postArr = [];

app.get('/authors', function(req, res){
  request({
    url: url1,
    json: true
  }, function (error, response, body1) {
      if (!error && response.statusCode === 200) {
        //console.log(body1)
        //console.log(JSON.username);
        //res.send(body1) // Print the json response
        for(var x in body1){
  			authorArr.push(body1[x]);
  			//console.log("pushing authors");
			}
		}
  })

  request({
    url: url1,
    json: true
  }, function (error, response, body2) {
      if (!error && response.statusCode === 200) {
        //console.log(body1)
        //console.log(JSON.username);
        //res.send(body1) // Print the json response
        for(var x in body2){
  			postArr.push(body2[x]);
  			//console.log("pushing posts");
			}
		}
  })


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

