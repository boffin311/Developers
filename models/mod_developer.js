const getDb = require('../utils/database').getDb;
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
       return result
   }).catch((err) => {
       
   });
    }
}

module.exports = Developer;