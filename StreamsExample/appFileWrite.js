var fs = require("fs");
var data = 'This text is written using writeSteam';

var options  =  { encoding: "UTF8" };

//1. Create write stream  
var writeStream = fs.createWriteStream("output.txt", );  

//2. Write data to output file  
writeStream.write(data);  

//3. End the stream writing  
writeStream.end();  

writeStream.on("finish", function(){ 
   console.log("Finished....");  
});

writeStream.on("error", function(error){ 
   console.log("Error while writing to file");  
   console.log("Error Details");  
   console.log(console.error.stack);
});

console.log("Program ended");