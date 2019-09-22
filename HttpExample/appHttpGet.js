//To access secured site use require('https')
var https  = require('https');  

var url = "https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

var request  = https.get(url, (response) => {
    
    console.log("Status: ", response.statusCode);
    
    //console.log("headers: ", response.headers);

    response.on("data", (data) =>{
        console.log(JSON.parse(data));
    })
});  

request.on("error", (error) => {
    console.log("There was an error while accessing server..");
});


