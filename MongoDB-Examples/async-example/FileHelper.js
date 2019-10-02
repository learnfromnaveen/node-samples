var fs = require("fs");
var options = { encoding: "UTF8" };

exports.FileHelper = function() {
  this.write = (filePath, data) => {
    //1. Create write stream
    var writeStream = fs.createWriteStream(filePath, options);
    //2. Write data to output file
    writeStream.write(JSON.stringify(data));
    //3. End the stream writing
    writeStream.end();
  };
};

// writeStream.on("finish", function() {
//   console.log("Finished....");
// });

// writeStream.on("error", function(error) {
//   console.log("Error while writing to file");
//   console.log("Error Details");
//   console.log(console.error.stack);
// });

// console.log("Program ended");
