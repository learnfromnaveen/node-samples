//Import events module  
var events  = require('events');

//create event emitter object  
var eventEmitter  = new events.EventEmitter();  

//create eventHandler 
function onRequestEventHandler(){ 
    console.log("onRequest event handler...");
    eventEmitter.emit("onRequestComplete");
}

function onRequestCompleteEventHandler(){ 
    console.log("Request processed successfully!!!");
}
//Register event

eventEmitter.on("onRequest", onRequestEventHandler);
eventEmitter.on("onRequestComplete", onRequestCompleteEventHandler);


//call onRequestEvent 

eventEmitter.emit("onRequest");

