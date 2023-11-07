const SECRET_KEY = require('../config/secretKey.js')
const jwt = require('./jwt.js')

async function createToken(user) {
    const payload = {
        username : user.username,
        email : user.email,
        _id : user._id
    }

    const token = await jwt.sign(payload,SECRET_KEY)
    return token
}

module.exports = createToken
