'use strict';
const { faker } = require('@faker-js/faker');
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

     await queryInterface.bulkInsert('Messages', [{
      message: 'Yo! I wanna clean cut, homie.',
      stylistId: 1,
      userId: 2
   }, 
    {
      message: 'Yo! I wanna clean cut, please guy.',
      stylistId: 2,
      userId: 2
    },
    ...new Array(100).fill('').map(el => {
      return {
        message : faker.lorem.paragraph(),
        stylistId : 1,
        userId : 2
      }
    })
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     const Op = Sequelize.Op;
     return queryInterface.bulkDelete('Messages', {
       id: { [Op.in]: [1] }
     }, {});
  }
};
