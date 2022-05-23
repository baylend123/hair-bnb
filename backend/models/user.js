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
            User.hasMany(models.Booking, { foreignKey: 'userId' })
            User.hasMany(models.Message, { foreignKey: 'senderId' })
            User.hasMany(models.Message, { foreignKey: 'recipientId' })
        }

        toSafeObject() {
            const {
                id, firstName,
                lastName,
                email,
                bio,
                currentHairStyle,
                profilePhoto,
                city,
                state,
                address,
                venue,
                photos,
                isStylist
            } = this;
            return {
                id,
                firstName,
                lastName,
                email,
                bio,
                currentHairStyle,
                profilePhoto,
                city,
                state,
                address,
                venue,
                photos,
                isStylist
            };
        }

        validatePassword(password) {
            return bcrypt.compareSync(password, this.hashedPassword.toString())
        }

        static async getCurrentUserById(id) {
            return await User.findByPk(id);
        };

        static async login({ email, password }) {
            const { Op } = require('sequelize');
            const user = await User.findOne({
                where: {
                    [Op.or]: {
                        email: email,
                    },
                },
            });
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
                state,
                isStylist : false
            });
            return await User.findByPk(user.id);
        };
        static async stylistSignup({
            firstName,
            lastName,
            email,
            bio,
            currentHairStyle,
            profilePhoto,
            password,
            city,
            state,
            address,
            venue,
            photos,
            isStylist
        }) {
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
                state,
                venue,
                address,
                photos: JSON.stringify(photos),
                isStylist: true
            });
            return await User.findByPk(user.id);
        }
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
        state: DataTypes.STRING,
        address: DataTypes.STRING,
        venue: DataTypes.BOOLEAN, 
        photos: DataTypes.STRING,
        isStylist: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
