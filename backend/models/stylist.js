'use strict';
const bcrypt = require('bcryptjs');
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
      Stylist.hasMany(models.Booking, {foreignKey: 'stylistId'})
      Stylist.hasMany(models.Message, {foreignKey: 'stylistId'})
      Stylist.hasMany(models.Tag, {foreignKey: 'stylistId'})
    }
    toSafeObject(){
      const {
        id, firstName, lastName, email, bio, currentHairStyle, profilePhoto, city, state, address, venue, photos
      } = this;
      return {
        id, firstName, lastName, email, bio, currentHairStyle, profilePhoto, city, state, address, venue, photos
      };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString())
    }

    static async getCurrentUserById(id) {
      return await Stylist.findByPk(id);
     };

    static async login({ email, password }) {
      const { Op } = require('sequelize');
      const user = await Stylist.findOne({
        where: {
          [Op.or]: {
            email: email,
          },
        },
      });
      if (user && user.validatePassword(password)) {
        return await Stylist.findByPk(user.id);
      }
    };

    static async signup({ firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, city, state, venue, photos, address }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await Stylist.create({
        firstName,
        lastName,
        email,
        bio,
        currentHairStyle,
        profilePhoto,
        hashedPassword,
        city,
        state, 
        venue, 
        address,
        photos : JSON.stringify(photos)
      });
      return await Stylist.findByPk(user.id);
    };

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
    venue: DataTypes.BOOLEAN, 
    photos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stylist',
  });
  return Stylist;
};
