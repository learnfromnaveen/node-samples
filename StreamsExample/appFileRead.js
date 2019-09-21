var fs  =  require("fs");  
var data =  '';  

//1. Create a read stream 
var readerStream   = fs.createReadStream('input.txt');  

//2. Set the encoding  
readerStream.setEncoding('UTF8');  

//3. Set EventEmitter data to read the chunks of file data
readerStream.on('data', function(chunk){
    data += chunk;  
});

//4. Set EventEmitter end to log or store the read data from file 
//   End will say that stream reading is completely done
readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(error){
    console.log("Error: ", error);
});  


console.log("Program ended...");




