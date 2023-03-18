const {Category} = require('../models')

class ControllerCategory {
  static async getCategories(req, res, next) {
    try {
      const {id} = req.query
      let arg
      if(id) {
        arg = {
          where: {
            id
          }
        }
      }
      const categoriesData = await Category.findAll(arg)     
      if(!categoriesData.length) throw {name: 'NotFound'} 
      res.status(200).json(categoriesData)
    } catch (error) {
      next(error)
    }
  }

  static async postCategories(req, res, next) {
    try {
      const {name} = req.body
      const categoriesData = await Category.create({name})      
      res.status(201).json(categoriesData)
    } catch (error) {
      next(error)
    }
  }

  static async deleteCategories(req, res, next) {
    try {
      const {id} = req.params
      const categoriesData = await Category.destroy({
        where: {
          id
        }
      })
      if(!categoriesData) throw {name: 'NotFound'}
      res.status(204).json()
    } catch (error) {
      next(error)
    }
  }

  static async patchCategories(req, res, next) {
    try {
      const {name} = req.body
      const {id} = req.params
      console.log(name, id, 'ini masuk')
      const categoriesData = await Category.update({name}, {
        where: {
          id
        }
      })
      console.log(categoriesData, 'outputt')
      if(!categoriesData) throw {name: 'NotFound'}
      res.status(204).json()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerCategory