const jwt = require('jsonwebtoken')
const secret = 'indomie'

const generateToken = (user) => {
    let access_token = jwt.sign({
        email: user.email,
        id: user.id
    }, secret)
    return access_token
}

const verifyToken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {generateToken,verifyToken}