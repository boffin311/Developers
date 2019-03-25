const express=require('express')
const controller=require('../controllers/LogIncontroller')
const routes=express.Router()
routes.post('/signUp/add_account',controller.registerUser)
routes.get('/signUp',controller.signUpPage)
module.exports=routes