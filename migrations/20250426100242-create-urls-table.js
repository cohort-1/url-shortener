'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('urls', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      og_url: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      expiry_data: {
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
        references: {
          model: 'users',
          key: 'id',
        
        }
      },
      visits: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('urls');
  }
};
