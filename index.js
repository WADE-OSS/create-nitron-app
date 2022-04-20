#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
console.log("Welcome to Create Nitron App");

const JSTemp = (`
const App = (\`
    <h1>Hello, Nitron!</h1>
\`);

nitronDOM.render(App,document.getElementById('root'));
`);

const HTMLTemp = (`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nitron App</title>
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Creating a new Nitron web, app" />
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/gh/WADE-OSS/nitron@0.1.0/dist/nitron.bundle.js" integrity="sha384-kr+s4jMzRw6lZ4jcCKFGQUlRFvQlX1BkWAbhbnkCZd9yGHJQvFLTokN6TKFq/HOL" crossorigin="anonymous"></script>
    <script src="./src/App.js"></script>
</body>
</html>
`);

const answerCallback = (answer) => {
  if (answer === 'y') {
    console.log('Start creating.');
    rl.close();
    !fs.existsSync('src')&&fs.mkdirSync('src');
    fs.writeFile('./index.html',HTMLTemp,
    function(err){
        if (err === null) {
            console.log(`'index.html' File creation success.`);
        } else {
            console.log(`'index.html' File creation failed.`);
        }
    });
    fs.writeFile('./src/App.js',JSTemp,
    function(err){
        if (err === null) {
            console.log(`'./src/App.js' File creation success.`);
        } else {
            console.log(`'./src/App.js' File creation failed.`);
        }
    });
  } else if (answer === 'n') {
    console.log('Canceled app creation.');
    rl.close();
  } else {
    console.clear();
    console.log('Enter only y or n.');
    rl.question('Do you want to start creating a nitron App? (y/n) ', answerCallback);
  }
};

rl.question('Do you want to start creating a nitron App? (y/n) ', answerCallback);