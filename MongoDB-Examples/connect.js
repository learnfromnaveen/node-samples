var MongoClient = require('mongodb').MongoClient
var URL = 'mongodb://localhost:27107'

try{
MongoClient.connect(URL, (error, db)=>{
    if(error){
        console.log("failed to connect to database");  
        console.log(error);
    }else { 
        console.log("connection successfull");
        db.close();  //close the connection 
    }
});
}
catch(e){
    console.log("Error....");
}