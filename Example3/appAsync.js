var fs  = require("fs");  

fs.readFile("article.json", function(err, data){

    if(err){
        console.log("Error: ", err.message);
        return;
    }

    var article = JSON.parse(data);  

    console.log("Author: ", article.author);
});

console.log("program ended...");  