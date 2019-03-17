const getDb = require('../utils/database').getDb;
const mongodb=require('../utils/database')
const ObjectId=require('mongodb').ObjectID
class Developer {
    constructor(userName, specialization, github, country) {
        this.userName = userName
        this.specialization = specialization
        this.github = github
        this.country = country
    }
    addDeveloper() {
        const db = getDb()
         db.collection('Developer').insertOne(this).then((result) => {
          //  console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    }
   static fetchAll() {
   const db=getDb()
   //console.log(db)
   return db.collection('Developer').find({}).toArray().then((result) => {
       //console.log(result)
       return result
   }).catch((err) => {
       
   });
    }
    static findById(developerId){
        console.log( new ObjectId(developerId))
      //  console.log(developerId.toString())
       const db=getDb()
   
        return db.collection('Developer').find({'_id':new ObjectId(developerId)}).toArray().then((result) => {
            console.log(result)
            return result
        }).catch((err) => {
            
        });
    }
}
    
module.exports = Developer;