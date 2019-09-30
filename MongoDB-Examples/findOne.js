var MongoClient = require("mongodb").MongoClient;
var URL = "mongodb://localhost:27017/";

MongoClient.connect(URL, (error, server) => {
  if (error) {
    console.log("failed to connect to server..");
  } else {
    console.log("connection successfull");

    var db = server.db("mydb");

    db.collection("article").findOne({}, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Title: " + result.title);
      }

      server.close();
    }); //end collection
  } // end else
}); // end connection
