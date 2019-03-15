const Developers=require('../models/mod_developer')
module.exports.showDeveloper=(req,res,next)=>{
    Developers.fetchAll().then((developerList) => {
        console.log(developerList[0].specialization)
        res.render('profiles',{title: "Developers",allDeveloper:developerList})
       
    }).catch((err) => {
        // console.log(err)
    });
 
}