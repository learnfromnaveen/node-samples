var MongoClient = require('mongodb').MongoClient
var URL = 'mongodb://localhost:27017/'

try {
    MongoClient.connect(URL, (error, server) => {
        if (error) {
            console.log("failed to connect to db server");
            return;
        }

        //2. Switch to database 
        var db = server.db("testdb");

        //3. query to find the person to update 
        var query = { name: 'Vivaan Jr'};

        //4. updated values  
        var updatedPerson = { $set : { name: 'Vivaan', isMinor : true}};


        //4. Insert person document into person collection 
        db.collection("person").updateOne(query, updatedPerson, (error, result)=>{
            if(error){
                console.log('failed to update record in to <person> collection');
                server.close();
                return;
            }

            console.log(result.modifiedCount + 'record(s) updated successfully');

            //5. Close the connection  
            server.close();
        });

    });
}
catch (e) {
    console.log("Error....");
}