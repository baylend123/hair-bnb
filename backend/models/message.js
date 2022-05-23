'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.User, {foreignKey: 'senderId'})
      // Message.belongsTo(models.User, {foreignKey: 'recipientId'})
      // Message.belongsTo(models.Stylist, {foreignKey: 'stylistId'})
    }
  }
  Message.init({
    senderId: DataTypes.INTEGER,
    recipientId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
