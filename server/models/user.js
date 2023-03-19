'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {
        foreignKey: 'authorId'
      })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Username has been taken'},
      validate: {
        notEmpty: {msg: 'Username is required'},
        notNull: {msg: 'Username is required'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email is already exist'},
      validate: {
        isEmail: {msg: 'Invalid email format'},
        notEmpty: {msg: 'Email is required'},
        notNull: {msg: 'Email is required'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password is required'},
        notNull: {msg: 'Password is required'}
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};