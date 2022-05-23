'use strict';
const { faker } = require('@faker-js/faker');
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Messages', [
      {
        message: 'Yo! I wanna clean cut, homie.',
        senderId: 1,
        recipientId: 2
      },
      {
        message: 'Hey are you there? I want a clean cut',
        senderId: 1,
        recipientId: 2
      },
      {
        message: 'Hellooooooooo',
        senderId: 1,
        recipientId: 2
      },
      {
        message: 'Hey answer me',
        senderId: 1,
        recipientId: 2
      },
      {
        message: 'alright bet I can get that cut for you',
        senderId: 2,
        recipientId: 1
      },
      // ...new Array(100).fill('').map(el => {
      //   return {
      //     message : faker.lorem.paragraph(),
      //     userId : 2
      //   }
      // })
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Messages', {
      id: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};
