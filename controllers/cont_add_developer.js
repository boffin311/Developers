const path=require('path')
const Developer=require('../models/mod_developer')
module.exports.getDeveloper=(req,res,next)=>{
    new Developer(req.body.userName,req.body.specialization,req.body.github,req.body.country).addDeveloper()
    res.redirect('/')
}
module.exports.setDeveloperPage=(req,res,next)=>{
    Developer.fetchAll().then((result) => {
    //   console.log(result)  
      res.sendFile(path.join(__dirname,"../","views","add_developers.html")) 
    
    }).catch((err) => {
        res.send("Error 404 'Page not Found'")
    })
  
  }