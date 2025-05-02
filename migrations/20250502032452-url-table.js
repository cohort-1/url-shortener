'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('urls',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      og_url:{
        type:Sequelize.STRING(65535),
        allowNull:false,
      },
      url:{
        type:Sequelize.STRING(255),
      },
      expiry_date:{
        type:Sequelize.DATE,
        allowNull:true
      },
      user_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"users",
          key:"id"
        }
      },
      visits:{
        type:Sequelize.INTEGER,
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    }) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('urls');
  }
};
