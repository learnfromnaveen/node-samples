//Inclue below module to work on files
var fs = require('fs');  

//To read file synchronously use readFileSync method
var article = fs.readFileSync("article.json");  

var jsonArticle = JSON.parse(article);  

console.log("Author: " + jsonArticle.author);  

console.log("program ended...");
