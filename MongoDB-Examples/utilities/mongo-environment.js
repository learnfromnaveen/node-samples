var config = require("../config").config;

exports.MongoEnvironment = {
  IsProduction: function() {
    return process.env.NODE_ENVIRONMENT
      ? process.env.NODE_ENVIRONMENT.toLowerCase() === "production"
      : false;
  },

  InitConfiguration: function() {
    if (this.IsProduction()) {
      config.CONNECTION_STRING = process.env.CONNECTION_STRING;
      config.NODE_ENVIRONMENT = process.env.NODE_ENVIRONMENT;
      config.DATABASE = process.env.DATABASE;
    }

    return JSON.parse(JSON.stringify(config));
  }
};
