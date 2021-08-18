const mongoose = require ('mongoose')
const db_connection =()=>{
    mongoose.connect('mongodb+srv://lav-express:tlili123@cluster0.7r8dm.mongodb.net/lav-express?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })

    .then (()=>console.log('database connected bruh'))
    .catch(()=>console.log('ma ta5demsh'))
}










module.exports = db_connection