var fs  = require("fs");  

var options = { encoding: "UTF8" };  
var readerStream  = fs.createReadStream("input.txt", options);
var writerStream  = fs.createWriteStream("output.txt", options);

//Use the pipe 

readerStream.pipe(writerStream);

writerStream.on("finish", function(){
    console.log("File successfully written to output.txt");
})

console.log("Program ended");

