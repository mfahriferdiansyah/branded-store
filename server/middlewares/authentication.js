const { verifyToken } = require("../helpers/jwt")
const { User } = require('../models')

async function authentication(req, res, next) {
    try {
        let { access_token } = req.headers
        if (!access_token) throw { name: `InvalidToken` }
        let payload = verifyToken(access_token)
        let user = await User.findByPk(payload.id)
        if (!user) throw { name: `Unauthenticated` }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication