var fs  = require('fs');  
var zlip = require('zlib');

//1.Read file create
//2.Zip the file  
//3. Write the zipped file to target location  


//reading from arguments  
/* 
    process.argv holds the arguments passed from command line  
    By defualt index 0 will have node command  
    and index 1 will have file which is executed ex: app.js 
    any command passed will start from index - 2 

    So we are concerned only the arguments which are needed to run the program  
    which will start from index 2

    So we will be slicing the first two arguments  

*/

var arguments  =  process.argv.slice(2);

if ( arguments.length !== 2 ){
    console.log("either source/target is missing.")
    console.log("example:  node app.js c:\file\source.txt c:\file\target.txt.gz");
    return;
}
var source  = arguments[0];  
var target = arguments[1];


var fileReaderSteam  =  fs.createReadStream(source);
fileReaderSteam.on("end", function(){ 
    console.log("File read successfully....");  
});

var zippperStream = zlip.createGzip();
zippperStream.on("end", function(){ 
    console.log("file zipped success fully..");  
})  

var writeStream = fs.createWriteStream(target);
writeStream.on("finish", function(){ 
    console.log("zipped file written to target location successfully....");
});


    //Chaining streams 

    fileReaderSteam
    .pipe(zippperStream)
    .pipe(writeStream);

    