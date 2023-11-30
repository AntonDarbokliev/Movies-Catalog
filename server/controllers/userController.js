const { register, login, getUser } = require('../services/userService.js')
const errorHandler = require('../utils/errorHandler.js')

const userController = require('express').Router()

    userController.post('/register', async (req,res)=>{
        try {
            const {token , createdUser} = await register(req.body)
            const userObj = createdUser.toObject()
            return res.json({...userObj,token})
        } catch (err) {
            const errObj = errorHandler(err)
            res.status(500).json(errObj);
        }
    })

    userController.post('/login', async (req,res)=>{
        try{
            const {token , user} = await login(req.body)
            const userObj = user.toObject()
            return res.json({...userObj,token})
        }catch(err){
            const errObj = errorHandler(err)
            res.status(500).json(errObj);
        }
    })

    userController.get('/logout',async (req,res) => {
        return res.json({message : 'Successfully logged out!'})
    })


    userController.get('/:id',async (req,res) => {
        try {
            const user = await getUser(req.params.id)
            res.json(user)
        } catch (err) {
            const errObj = errorHandler(err)
            res.status(404).json(errObj);            
        }
    })



module.exports = userController