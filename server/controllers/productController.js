const {Product, User, Image, Category} = require('../models')
const {sequelize} = require('../models')

class ContorllerProduct {
  static async getProducts(req, res, next) {
    try {
      const {id} = req.query
      let arg = {
        include: [{
          model: User, 
          attributes: {
              exclude: ['password']
          }
      }, Category]
      }
      if(id) {
        arg = {
          include: [{
            model: User, 
            attributes: {
                exclude: ['password']
            }
        }, Category],
          where: {
            id
          }
        }
      }
      const productsData = await Product.findAll(arg)
      if(!productsData.length) throw {name: 'NotFound'} 
      res.status(200).json(productsData)
    } catch (error) {
      next(error)
    }
  }

  static async getProductBySlug(req, res, next) {
    try {
      const {slug} = req.params
      const productData = await Product.findOne({
        where: {
          slug
        }
      })
      if(!productData) throw {name: 'NotFound'}
      res.status(200).json(productData)
    } catch (error) {
      next(error)
    }
  }

  static async postProducts(req, res, next){
    const t = await sequelize.transaction();
    try {
      const {name, slug, price, mainImg, img2, img3, description, categoryId, authorId} = req.body
      console.log(req.body, 'BODYYYYYYYYYYYYYY')
      const productData = await Product.create({name, slug, price, mainImg, description, categoryId, authorId}, { transaction: t })
      const img2Data = await Image.create({imgUrl: img2, productId: productData.id}, { transaction: t })
      const img3Data = await Image.create({imgUrl: img3, productId: productData.id}, { transaction: t })
      await t.commit();
      res.status(201).json({productData, img2Data, img3Data})
    } catch (error) {
      await t.rollback();
      next(error)
    }
  }

  static async deleteProducts(req, res, next) {
    try {
      const {id} = req.params
      const productData = await Product.destroy({
        where: {
          id
        }
      })
      if(!productData) throw {name: 'NotFound'}
      res.status(204).json()
    } catch (error) {
      next(error)
    }
  }

  static async patchProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {id} = req.params
      const {name, slug, price, mainImg, img2, img3, description, categoryId, imgId2, imgId3} = req.body
      const productData = await Product.update({name, slug, price, mainImg, description, categoryId}, { transaction: t, where: {id} })
      const img2Data = await Image.update({imgUrl: img2, productId: productData.id}, { transaction: t, where: {id: imgId2} })
      const img3Data = await Image.update({imgUrl: img3, productId: productData.id}, { transaction: t, where:{id: imgId3} })
      await t.commit();
      res.status(204).json()
    } catch (error) {
      await t.rollback();
      next(error)
    }
  }

}

module.exports = ContorllerProduct