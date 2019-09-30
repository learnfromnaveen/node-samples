var MongoClient = require('mongodb').MongoClient;

var MongoEnvironment = require('./utilities/mongo-environment').MongoEnvironment;

var configuration = MongoEnvironment.InitConfiguration();

console.log(configuration);

function Connect(){
    return new Promise((resolve, reject)=>{
        MongoClient.connect(configuration.CONNECTION_STRING, (error, server)=>{
            if(error)
                reject(error);
            resolve(server);
        })
    })
}


function GetArticles(db){
    
    return new Promise((resolve, reject) => {
        db.collection("article").find({}).toArray((error, result) => {
            if(error) reject(error);
            resolve(result);
        })
    });
}

async function main(){
    try{
        var server = await Connect();
        var db = server.db(configuration.DATABASE);
        var artilcles = await GetArticles(db);
        server.close();
    }
    catch(e){
        console.log(e);
    }
}



main();