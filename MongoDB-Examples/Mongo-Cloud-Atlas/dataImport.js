var MongoClient = require("mongodb").MongoClient;
var MongoHelper = require("./db-utilities/mongo-helper").MongoHelper;
var FileReader = require("./file-utilities/file-reader").FileReader;

async function dataImport() {
  var url = process.env.CONNECTION_STRING;
  var importFilePath = "C:/Received-Files/articles.json";
  var mongoHelper = new MongoHelper();
  var fileReader = new FileReader();
  var server = null;
  try {
    server = await mongoHelper.connect(url);
    var data = fileReader.readSyc(importFilePath);
    if (data) {
      try {
        var jsonData = JSON.parse(data);
        var result = mongoHelper.insertMany(
          server,
          "mydb",
          "article",
          jsonData
        );
      } catch (e) {
        console.log("Error while importing the data");
      }
    }
  } catch (e) {
    console.log("Error connecting to server");
  } finally {
    if (server) {
      server.close();
    }
  }
}

dataImport();
