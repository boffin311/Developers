const express=require('express')
const app=express()
const path=require('path')
const routers=require('./routes/add_developer')
const routes=require('./routes/show_developer')

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))  
app.use(routes)
app.use(routers)

app.listen(3000)
    