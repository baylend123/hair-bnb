'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Users', [{
         firstName: 'B',
         lastName: 'Money',
         email: 'bm@email.com',
         bio: 'has money and hair',
         currentHairStyle: 'sick ass combover',
         profilePhoto: 'https://hair-bnb.s3.us-west-1.amazonaws.com/1650394127005.jpeg',
         hashedPassword: bcrypt.hashSync('password'),
         city: 'Dallas',
         state: 'California'
       },
       {
        firstName: 'No',
        lastName: 'Money',
        email: 'nm@email.com',
        bio: 'has no money and no hair',
        currentHairStyle: 'sick ass head',
        profilePhoto: 'https://hair-bnb.s3.us-west-1.amazonaws.com/1650393341772.jpeg',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'San Diego',
        state: 'Texas'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['bm@email.com', 'nm@email.com'] }
    }, {});

  }
};
