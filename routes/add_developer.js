const express=require('express')
const routers=express.Router();
const path=require('path')
const bodyParser=require('body-parser')
const cont_add_developer=require('../controllers/cont_add_developer')
routers.use(bodyParser.urlencoded({extended:false}))
routers.post('/add_developer',cont_add_developer.getDeveloper)

routers.use('/',cont_add_developer.setDeveloperPage)
module.exports=routers; 