'use strict';
const bcrypt = require('bcryptjs');
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
      User.hasMany(models.Booking, {foreignKey: 'userId'})
      User.hasMany(models.Message, {foreignKey: 'userId'})
    }

    toSafeObject(){
      const {
        id, firstName, lastName, email, bio, currentHairStyle, profilePhoto, city, state
      } = this;
      return {
        id, firstName, lastName, email, bio, currentHairStyle, profilePhoto, city, state
      };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString())
    }

    static async getCurrentUserById(id) {
      return await User.findByPk(id);
     };

    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.findOne({
        where: {
          [Op.or]: {
            email: credential,
          },
        },
      });
      console.log(user)
      if (user && user.validatePassword(password)) {
        return await User.findByPk(user.id);
      }
    };

    static async signup({ firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, city, state }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        firstName,
        lastName,
        email,
        bio,
        currentHairStyle,
        profilePhoto,
        hashedPassword,
        city,
        state
      });
      return await User.findByPk(user.id);
    };

  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    currentHairStyle: DataTypes.STRING,
    profilePhoto: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
