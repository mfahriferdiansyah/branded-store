const { hashPassword, comparePassword } = require("../helpers/bcrypt")
const {signToken} = require('../helpers/jwt')
const {User} = require('../models')
const { Op } = require("sequelize");

class ControllerUser {
  static async postLogin(req, res, next) {
    try {
      let { email, password } = req.body
      if (!email) throw { name: `EmailRequired` }
      if (!password) throw { name: `PasswordRequired` }
      const userLogin = await User.findOne({
        where: {
          email: {
            [Op.iLike]: email
          }
        }
      })
      if (!userLogin) throw { name: `InvalidEmailPassword` }
      const passValidation = comparePassword(password, userLogin.password)
      if (!passValidation) throw { name: `InvalidEmailPassword` }
      const access_token = signToken({ id: userLogin.id })
      res.status(200).json({ access_token, username: userLogin.username, email: userLogin.email })
    } catch (error) {
      next(error)
    }
  }

  static async postRegister(req, res, next) {
    try {
      let { username, email: emailInput, password } = req.body
      if (!emailInput) throw { name: `EmailRequired` }
      if (!password) throw { name: `PasswordRequired` }
      const userRegister = await User.create({ username, email: emailInput.toLowerCase(), password: hashPassword(password)})
      let { id, email } = userRegister
      res.status(201).json({ id, email })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerUser

