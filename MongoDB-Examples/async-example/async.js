var MongoHelper = require("./MongoHelper").MongoHelper;
var FileHelper = require("./FileHelper").FileHelper;

var URL = "mongodb://localhost:27017/";

async function main() {
  try {
    var mongoHelper = new MongoHelper();
    var server = await mongoHelper.connect(URL);
    var result = await mongoHelper.find(server, "mydb", "article", {});
    var fileHelper = new FileHelper();
    if (result.length > 0) {
      fileHelper.write("c:/received-files/articles.json", result);
      console.log("Total articles: ", result.length);
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (server) {
      server.close();
    }
  }
}

main();
console.log("main program ended...");
