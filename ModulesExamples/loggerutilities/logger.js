var fileLogger  =  require('./fileLogger.js');  
var dbLogger = require('./databaseLogger.js')

exports.log = function(message){ 
    
    var arguments  = process.argv.slice(2);  

    var logger  = fileLogger.log;  

    if(arguments.length > 0 && arguments[0] === "database" ){ 
     logger  = dbLogger.log;  
    }

    logger.log(message);
};
