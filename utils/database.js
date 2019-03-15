const Mongodb = require('mongodb')
let db;
const mongoDbConnection = Mongodb.connect("mongodb+srv://Himanshu:magna1497@firstcluster-bhxab.mongodb.net/test?retryWrites=true",{useNewUrlParser:true}).then((client) => {
  db=client.db()
}).catch((err) => {

});

function getDb(){
    return db
}

module.exports.getDb=getDb;
module.exports.mongoDbConnection=mongoDbConnection;