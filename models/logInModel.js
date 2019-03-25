const getdb=require('../utils/database').getDb
class SignUp {
    constructor(name, email, phoneNumber, github) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.github = github
    }
    save() {
      const db=getdb()
      return db.collection('logIn').insertOne(this).then((result) => {
        console.log(result)  
      }).catch((err) => {
         console.log(result) 
      });
    }
}

module.exports=SignUp