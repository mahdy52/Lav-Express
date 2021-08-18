const express = require ('express')
const app = express()
const db = require('./config/db')
db();
const cors = require('cors')
app.use(cors())

app.use(express.json())




//config server
const PORT = process.env.PORT
app.listen('4000',()=> {
    console.log('server in use ')
    
})

 //user 
 const userRouter = require ('./router/userRouter')
 app.use('/app/User',userRouter)





