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
        var query = { name: 'Vivaan'};


        //4. Insert person document into person collection 
        db.collection("person").deleteOne(query, (error, result)=>{
            if(error){
                console.log('failed to delete record in to <person> collection');
                server.close();
                return;
            }

            console.log(result.deletedCount + ' record(s) updated successfully');

            //5. Close the connection  
            server.close();
        });

    });
}
catch (e) {
    console.log("Error....");
}