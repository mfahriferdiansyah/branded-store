const {Image} = require('../models')

class ControllerImage {
  static async getImagesByProdcutId(req, res, next) {
    try {
      const {productId} = req.query
      const imagesData = await Image.findAll({
        where: {
          productId
        }
      })
      console.log(imagesData)
      if(!imagesData.length) throw {name: 'NotFound'}
      res.status(200).json(imagesData)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerImage