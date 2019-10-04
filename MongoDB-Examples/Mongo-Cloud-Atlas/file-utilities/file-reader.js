var fs = require("fs");

exports.FileReader = function() {
  this.readSyc = filePath => {
    return fs.readFileSync(filePath);
  };
};
