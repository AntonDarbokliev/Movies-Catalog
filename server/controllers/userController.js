const { register, login } = require('../services/userService.js')

const userController = require('express').Router()

userController.post('/register', async (req,res)=>{
    try {
        const token = await register(req.body)
        res.cookie('auth',token,{httpOnly : true})
        return res.json()
    } catch (error) {
        console.log(error);
    }
})

userController.post('/login', async (req,res)=>{
    try{
        const token = await login(req.body)
        res.cookie('auth',token,{httpOnly : true})
        return res.json()
    }catch(err){
        console.log(err);
    }
})

module.exports = userController