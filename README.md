# week-1-task-HPDF
Week 1 task for HPDF
Note: Node and Express should be installed.
Nodejs - http://blog.teamtreehouse.com/install-node-js-npm-windows

For express use NPM with this command:
$ npm install express --save

Other packages:


Week 1 Task:

A simple hello-world at http://localhost:8080/​ that displays a simple string like "Hello World - Rohit".

Steps for execution:
Go to folder in which you saved this repo.
Open cmd by typing cmd in the address bar of this folder.
In cmd, type : "set FLASK_APP=final.py" and then hit enter(obviously without double quotation).
Again type: "flask run" and hit enter. and it will display as :
Serving Flask app "final"
Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
Go to browser and open http://127.0.0.1:5000/ and output will be "Hello World - Rohit".
Add a route, for e.g. http://localhost:8080/authors​, which:
a) fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
b) fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
c) Respond with only​ a list of authors and the count of their posts (a newline for each author).

Steps for execution:
Go to browser and open http://127.0.0.1:5000/authors and output will be displayed.
Set a simple cookie (if it has not already been set) at http://localhost:8080/setcookie​ with the following values: name= and age=.
Fetch the set cookie with http://localhost:8080/getcookies​ and display the stored key-values in it.

Steps for execution:
Go to browser and open http://127.0.0.1:5000/setcookie and cookie will be set.
Click the link to go to http://127.0.0.1:5000/getcookie and cookie's key-value will be displayed.
Deny requests to your http://localhost:8080/robots.txt​ page. (or you can use the response at http://httpbin.org/deny if needed)

Steps for execution:
Go to browser and open http://127.0.0.1:5000/robots.txt and response at http://httpbin.org/deny will be displayed.
Render an HTML page at http://localhost:8080/html​ or an image at http://localhost:8080/image​.

Steps for execution:
Go to browser and open http://127.0.0.1:5000/html and a html page will be rendered.
Again go to browser and open http://127.0.0.1:5000/image and an image will be rendered.
A text box at http://localhost:8080/input​ which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.

Steps for execution:
Go to browser and open http://127.0.0.1:5000/input.
There will be one text box. Enter your data in it and hit enter.
Then your data will be displayed on terminal like cmd or powershell.
