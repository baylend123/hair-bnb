'use strict';

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

     await queryInterface.bulkInsert('Bookings', [{
        date: "2022-06-12",
        time: "10:00 AM",
        userName: "no money",
        stylistName: "b money",
        stylistId: 1,
        userId: 2
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
     return queryInterface.bulkDelete('Bookings', {
       id: { [Op.in]: [1] }
     }, {});
  }
};
