const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb+srv://user:1234@cluster0.ps7z3.mongodb.net/crudnodejsmongodb?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(()=>console.log('DataBase: connected'))
    .catch((err)=>console.log(err))
}

module.exports = { connect };