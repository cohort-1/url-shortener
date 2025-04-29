'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
  await queryInterface.changeColumn('users','password',{
    type:Sequelize.STRING(120),
    allowNull:false,
  })    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users','password',{
      type:Sequelize.STRING,
      allowNull:false
    })
  }
};
