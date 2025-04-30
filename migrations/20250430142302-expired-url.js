'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('expired-urls', {
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
      expired_at: {
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
      },
      visits: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('expired-urls');

  }
};
