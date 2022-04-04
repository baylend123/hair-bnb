'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stylist.hasMany(models.Booking, {foreignKey : 'stylistId'})
      Stylist.hasMany(models.Message, {foreignKey : 'stylistId'})
      Stylist.hasMany(Tag, {foreignKey : 'stylistId'})
    }
  }
  Stylist.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    profilePhoto: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    venue: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Stylist',
  });
  return Stylist;
};
