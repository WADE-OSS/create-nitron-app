#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.clear()
console.log("Welcome to the Nitron.js Project Creation Manager.");

var projectName = "Nitron Web";
var description = "Web built with wade OSS";
var jsFile = "App";
var tag = "root";

const QprojectName = (AprojectName) => {
    if(AprojectName === ''){
        projectName = "Nitron Web";
        rl.question('project description : ', Qdescription);
    }else{
        projectName = AprojectName;
        rl.question('project description : ', Qdescription);
    }
};

rl.question('project name (Nitron Web) : ', QprojectName);

const Qend = (Aend) => {
    if (Aend === 'y') {
    	console.log('The Nitron.js Project Creation Manager will start creating the file.');
        var fs = require('fs');
    fs.writeFile(
        'index.html',
        `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${projectName}</title>
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="${description}" />
    <meta property="og:image" content="./assets/image/Nitron-blue.png" />
    <link rel="shortcut icon" href="./assets/image/favicon.ico" type="image/x-icon">
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="${tag}"></div>
    <script src="https://cdn.jsdelivr.net/gh/WADE-OSS/nitron@0.0.4/dist/nitron.js" integrity="sha384-kr+s4jMzRw6lZ4jcCKFGQUlRFvQlX1BkWAbhbnkCZd9yGHJQvFLTokN6TKFq/HOL" crossorigin="anonymous"></script>
    <script src="./${jsFile}.js"></script>
</body>
</html>`,
        function(err){
            if (err === null) {
                console.log(`Nitron.js Project Creation Manager - 'index.html' success`);
            } else {
                console.log(`Nitron.js Project Creation Manager - index.html' fail`);
            }
        }
    );
    fs.writeFile(
        `${jsFile}.js`,
        `nitron.ClassName('body',styles('margin: 0;'));\nApp = `+'`\n<h1>Hello, world!</h1>\n`\n'+`\nnitronDOM.render(App,document.getElementById('${tag}}'));`,
        function(err){
            if (err === null) {
                console.log(`Nitron.js Project Creation Manager - '${jsFile}.js' success`);
            } else {
                console.log(`Nitron.js Project Creation Manager - '${jsFile}.js' fail`);
            }
        }
    );
        rl.close();
    }else if (Aend === 'n') {
    	console.clear();
        rl.question('project name (Nitron Web) : ', QprojectName);
    }else {
    	console.clear();
        console.log(`\n=============================\nProject Name - ${projectName}\nProject Description - ${description}\nJS File name - ${jsFile}\nDOM Render ID - ${tag}\n=============================\n`);
    	console.log(`Enter only 'y' or 'n'`);
        rl.question('Is the information you entered correct? (y/n) ', Qend);
    }
};

const Qtag = (Atag) => {
    if(Atag === ''){
        tag = 'root'
        console.log(`\n=============================\nProject Name - ${projectName}\nProject Description - ${description}\nJS File name - ${jsFile}\nDOM Render ID - ${tag}\n=============================\n`);
        rl.question('Is the information you entered correct? (y/n) ', Qend);
    }else{
        tag = Atag
        console.log(`\n=============================\nProject Name - ${projectName}\nProject Description - ${description}\nJS File name - ${jsFile}\nDOM Render ID - ${tag}\n=============================\n`);
        rl.question('Is the information you entered correct? (y/n) ', Qend);
    }
};

const QjsFile = (AjsFile) => {
    if(AjsFile === ''){
        jsFile = 'App'
        rl.question('DOM Render ID (root) ', Qtag);
    }else{
        jsFile = AjsFile
        rl.question('DOM Render ID (root) ', Qtag);
    }
};

const Qdescription = (Adescription) => {
    if(Adescription === ''){
        description = 'Web built with wade OSS'
        rl.question('JS file name : ', QjsFile);
    }else{
        description = Adescription;
        rl.question('JS file name : ', QjsFile);
    }
};