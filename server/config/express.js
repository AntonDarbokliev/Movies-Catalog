const express = require('express')
const cors = require('../middlewares/cors.js')


module.exports = (app) => {
    app.use(express.urlencoded({ extended : true }))
    // app.use(cors({
    //     credentials : true,
    //     origin : 'http://localhost:3000',
    // }))
    app.use(cors())
}