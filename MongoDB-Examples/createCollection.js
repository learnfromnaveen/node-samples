var MongoClient = require('mongodb').MongoClient
var URL = 'mongodb://localhost:27017/'

try{
    MongoClient.connect(URL, (error, server)=>{
        if(error){
            console.log("failed to connect to db server");  
            return;
        }
        
        //2. Switch to database 
        var db = server.db("testdb");

        //3. Create collection 
        db.createCollection("person", ( error, result)=>{
            if(error){
                console.log("Failed to create collection 'person'");
                return;
            }
            console.log("collection 'person' created successfully");
            
            //4. Close the connection 
            server.close();
        })


    });
}
catch(e){
    console.log("Error....");
}