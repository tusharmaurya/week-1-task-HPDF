# week-1-task-HPDF
Week 1 task for HPDF</br>
Note: Node and Express should be installed.</br>
Nodejs - http://blog.teamtreehouse.com/install-node-js-npm-windows</br>

-For express use NPM with this command:</br>
npm install express --save</br>

-install dependencies</br>
npm install</br>

-Other packages:</br>
npm install cookie-parser</br>
npm install body-parser</br>
npm install request</br>

Week 1 Task:</br>

1.A simple hello-world at http://localhost:8080/​ that displays a simple string like "Hello World - Rohit".
Steps for execution:</br>
*Open nodejs command prompt.</br>
*Navigate to folder where you extracted the repo</br>
*In the console, type - node index.js</br>
*Open browser and type in address http://localhost:8080/. "Hello World - Tushar" will be displayed.</br>

2.Add a route, for e.g. http://localhost:8080/authors​, which:</br>
a) fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users</br>
b) fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts</br>
c) Respond with only​ a list of authors and the count of their posts (a newline for each author).
</br>
Steps for execution:</br>
Go to browser and open http://127.0.0.1:8080/authors and output will be displayed.</br>

3.Set a simple cookie (if it has not already been set) at http://localhost:8080/setcookie​ with the following values: name= and age=.
Fetch the set cookie with http://localhost:8080/getcookies​ and display the stored key-values in it.</br>

Steps for execution:</br></br>
Go to browser and open http://127.0.0.1:8080/setcookie and cookie will be set.</br>
Click the link to go to http://127.0.0.1:8080/getcookie and cookie's key-value will be displayed on the console.</br>
</br>Deny requests to your http://localhost:8080/robots.txt​ page. (or you can use the response at http://httpbin.org/deny if needed)</br>

Steps for execution:</br>
Go to browser and open http://127.0.0.1:8080/robots.txt and response at http://httpbin.org/deny will be displayed.</br>
Render an HTML page at http://localhost:8080/html​ or an image at http://localhost:8080/image​.
</br></br>
Steps for execution:
Go to browser and open http://127.0.0.1:8080/html and a html page will be rendered.</br>
A text box at http://localhost:8080/input​ which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.</br>

Steps for execution:</br>
Go to browser and open http://127.0.0.1:8080/input.</br>
There will be one text box. Enter your data in it and hit enter.</br>
Output in console.</br>
