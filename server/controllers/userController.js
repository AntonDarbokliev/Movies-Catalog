const { register, login } = require('../services/userService.js')

const userController = require('express').Router()

    userController.post('/register', async (req,res)=>{
        try {
            const {token , createdUser} = await register(req.body)
            const userObj = createdUser.toObject()
            res.cookie('auth',token,{httpOnly : true})
            return res.json({...userObj,token})
        } catch (error) {
            console.log(error);
        }
    })

    userController.post('/login', async (req,res)=>{
        try{
            const {token , user} = await login(req.body)
            const userObj = user.toObject()
            res.cookie('auth',token,{httpOnly : true})
            return res.json({...userObj,token})
        }catch(err){
            console.log(err);
        }
    })

    userController.get('/logout',async (req,res) => {
        res.clearCookie('auth')
        return res.json()
    })



module.exports = userController