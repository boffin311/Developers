const SignUp=require('../models/logInModel')
const path=require('path')

module.exports.registerUser=(req,res,next)=>{
    new SignUp(req.body.userName,req.body.email,req.body.phoneNumber,req.body.github).save().then((result) => {
      console.log(result)  
    }).catch((err) => {
       console.log(err) 
    });

    res.redirect('/signUp')
}

module.exports.signUpPage=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','signUp.html'))
}