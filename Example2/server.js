
var http  = require('http');  

const PORT = 8082;
//create a server using createServer
//use listen to set the port number on which server will  
// listen to client requests   

//request : will hold the request information from client  
//response: will hold response that needs to be sent back to client  

http.createServer(function(request, response){
    //Set HTTP header  
    response.writeHead(200,  {'Content-Type' : 'text/plain'});
    response.end('Welcome to node HTTP Web Server');

}).listen(PORT);

console.log("Server started successfull at port number : " + PORT);
