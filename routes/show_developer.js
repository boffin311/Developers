const express=require('express')
const routers=express.Router()
const showDeveloper=require('../controllers/cont_show_developer')
routers.use('/developers',showDeveloper.showDeveloper)
module.exports=routers