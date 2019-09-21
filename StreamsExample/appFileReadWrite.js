var fs  =  require("fs");  

var options  =  { 
    encoding:  "UTF8"
};  

var readerStream  = fs.createReadStream("input.txt", options);  
var writerStream = fs.createWriteStream("output.txt", options);  

readerStream.on("data", function(chunk){
    writerStream.write(chunk);
});  

readerStream.on("end", function(){ 
    writerStream.end(); 
});  

readerStream.on("error", function(error){
    console.log("Error while reading from file");  
});

writerStream.on("finish", function(){ 
    console.log("data has been written to file successfully");  
});

writerStream.on("error", function(error){
    console.log("Error while reading from file");  
});


console.log("Program ended");