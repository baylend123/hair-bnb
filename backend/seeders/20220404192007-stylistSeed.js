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

    await queryInterface.bulkInsert('Stylists', [{
      firstName: 'B',
      lastName: 'Money',
      email: 'bm@email.com',
      bio: 'has money and hair',
      profilePhoto: 'https://hair-bnb.s3.us-west-1.amazonaws.com/1650394127005.jpeg',
      hashedPassword: bcrypt.hashSync('password'),
      city: 'Dallas',
      state: 'California',
      address: 'some street',
      photos : '',
      venue: true
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
    return queryInterface.bulkDelete('Stylists', {
      email: { [Op.in]: ['bm@email.com'] }
    }, {});
  }
};
