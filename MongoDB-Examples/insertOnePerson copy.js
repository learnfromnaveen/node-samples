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

        //3. Create person document 
        var person = { name: 'Vivaan', dob: '06/08/2013' };

        //4. Insert person document into person collection 
        db.collection("person").insertOne(person, (error, result)=>{
            if(error){
                console.log('failed to insert record in to <person> collection');
                return;
            }

            console.log(result.insertedCount + 'record(s) inserted successfully');

            //5. Close the connection  
            server.close();
        });

    });
}
catch (e) {
    console.log("Error....");
}