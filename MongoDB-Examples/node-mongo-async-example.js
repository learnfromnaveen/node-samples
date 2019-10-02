var MongoClient = require("mongodb").MongoClient;
var URL = "mongodb://localhost:27017/";

//Promise

function Connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(URL, (error, server) => {
      if (error) {
        reject(error);
      }
      resolve(server);
    });
  });
}

Connect()
  .then(server => {
    console.log("successfully connected to server");
  })
  .catch(error => {
    console.log("error while connecting to database..");
  });


  async, await