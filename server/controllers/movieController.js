const movieController = require('express').Router()


movieController.post("/create", (req,res) => {
    console.log(req.body);
    res.json('created')
})

module.exports = movieController