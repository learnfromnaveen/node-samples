var MongoClient = require("mongodb").MongoClient;
var URL = "mongodb://localhost:27017/";

MongoClient.connect(URL, (error, server) => {
  if (error) {
    console.log("failed to connect to server..");
  } else {
    console.log("connection successfull");

    var db = server.db("mydb");
    var sortQuery = { title: -1 };
    db.collection("article")
      .find()
      .sort(sortQuery)
      .toArray((error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Total documents: " + result.length);
          result.forEach(document => {
            console.log("Title: " + document.title);
          }); // end foreach
        }

        server.close();
      }); //end collection
  } // end else
}); // end connection
