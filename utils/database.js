const Mongodb = require('mongodb')
let db;
const mongoDbConnection = Mongodb.connect("mongodb://localhost:27017/test",{useNewUrlParser:true}).then((client) => {
  db=client.db()

}).catch((err) => {

});

function getDb(){
  // console.log(mongoDbConnection)
    return db
}

module.exports.getDb=getDb;
module.exports.mongoDbConnection=mongoDbConnection;

