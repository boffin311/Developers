const express=require('express')
const routers=express.Router()
const bodyParser=require('body-parser')

const showDeveloper=require('../controllers/cont_show_developer')
routers.use(bodyParser.urlencoded({extended:false}))
routers.post('/developers/:developerId/edit_developer',showDeveloper.editDeveloper)
routers.use('/developers/:developerId',showDeveloper.showSingleDeveloper)
routers.get('/developers',showDeveloper.showDeveloper) 

module.exports=routers

