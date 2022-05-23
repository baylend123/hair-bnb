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
         id:1,
         firstName: 'Baylen',
         lastName: 'Normal User',
         email: 'b@email.com',
         bio: 'has money and hair',
         currentHairStyle: 'sick ass combover',
         profilePhoto: 'https://hair-bnb.s3.us-west-1.amazonaws.com/Screen+Shot+2022-04-27+at+5.52.53+PM.png',
         hashedPassword: bcrypt.hashSync('password'),
         city: 'Dallas',
         state: 'California',
         address: null,
         venue : null,
         photos : null,
         isStylist : false
       },
       {
        id:2,
        firstName: 'Baylen',
        lastName: 'Stylist User',
        email: 'bs@email.com',
        bio: 'has no money and no hair',
        currentHairStyle: 'sick ass head',
        profilePhoto: 'https://hair-bnb.s3.us-west-1.amazonaws.com/Nishi+Nelson+rev++(2).jpg',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'San Diego',
        state: 'Texas',
        address : '123 road st.',
        venue : true,
        photos : JSON.stringify(['https://hair-bnb.s3.us-west-1.amazonaws.com/1650393341772.jpeg','https://hair-bnb.s3.us-west-1.amazonaws.com/1650394127005.jpeg', 'https://hair-bnb.s3.us-west-1.amazonaws.com/1650476641625.jpg' ]),
        isStylist : true
        
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
      email: { [Op.in]: ['b@email.com', 'bs@email.com'] }
    }, {});

   }
  
};
