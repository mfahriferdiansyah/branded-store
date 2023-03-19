'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        onDelete: 'cascade'
      })
      Product.belongsTo(models.User, {
        foreignKey: 'authorId',
        onDelete: 'cascade'
      })
      Product.hasMany(models.Image, {
        foreignKey: 'productId',
      })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {msg: 'Name is required'},
        notNull: {msg: 'Name is required'}
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: {msg: 'Name/Slug already exist'},
      validate: {
        notEmpty: {msg: 'Slug is required'},
        notNull: {msg: 'Slug is required'}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {msg: 'Description is required'},
        notNull: {msg: 'Description is required'}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {msg: 'Price is required'},
        notNull: {msg: 'Price is required'},
        min:{
          args:10,
          msg:"Minimum price is 10 USD"
      }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {msg: 'Main image is required'},
        notNull: {msg: 'Main image is required'}
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};