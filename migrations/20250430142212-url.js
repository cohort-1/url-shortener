'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('urls', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      og_url: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: `users`,
          key: `id`,
        }
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('urls');
  }
};
