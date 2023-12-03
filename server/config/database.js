const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.DATABASE_CONNECTION_STRING ||  'mongodb://127.0.0.1:27017/Movie-Catalog'

module.exports = async () => {
    try{
        await mongoose.connect(connectionString,{
            // useUnifiedTopology : true,
            // useNewUrlParser: true,
          })
          console.log('Database connected');
    } 
    catch(err){
        console.error('Error initializing database');
        process.exit(1)
    }
};