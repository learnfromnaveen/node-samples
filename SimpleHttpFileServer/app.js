var http = require('http');  
var fs  = require('fs'); 
var url  = require('url');  
var path = require('path');  
var events = require('events'); 


var eventEmitter  = new events.EventEmitter();  
eventEmitter.on("onRequestReceived", onRequestReceivedEventHandler);
eventEmitter.on("processRequest", processRequestEventHandler);
eventEmitter.on("onRequestCompleted", onRequestCompletedEventHandler);
eventEmitter.on("processingError", processingErrorEventHandler);  

function processingErrorEventHandler(response){ 
    response.sendStatus(404);
}

function onRequestReceivedEventHandler(request, response){ 
 
    //2. Extract file path 
    var filePath = getRequestedFilePath(request.url);  
    eventEmitter.emit("processRequest", filePath, response);
}

function processRequestEventHandler(filePath, response){ 
    fs.readFile(filePath, function(err, data){
        if(err){
            eventEmitter.emit("processingError", response); 
            return;
        }
        eventEmitter.emit("onRequestCompleted", data, response);
    });
}

function onRequestCompletedEventHandler(data, response){ 
    //set the response header 
    response.writeHead(200,{'Content-Type' : 'text/json'});
    response.end(data);  
}


function getRequestedFilePath(requestUrl){
    var r    =  url.parse(requestUrl);
    return path.join(__dirname,r.path);  
}

http.createServer(function(request, response){
    //1. raise onRequestReceived event  
   eventEmitter.emit("onRequestReceived", request, response); 
}).listen(8082);  

console.log("server started successfully at port : 8082");  
