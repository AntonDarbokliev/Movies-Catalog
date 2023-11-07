const { register } = require('../services/userService.js')

const userController = require('express').Router()

userController.post('/register', async (req,res)=>{
    try {
        const token = await register(req.body)
        res.cookie('auth',token,{httpOnly : true})
    } catch (error) {
        console.log(error);
    }
})

module.exports = userController