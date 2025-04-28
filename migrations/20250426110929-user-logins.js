'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user_login', {
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
				references: {
					model: `users`,
					key: `id`,
				},
			},
			token: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
      		login_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			expires_at: {
				type: Sequelize.DATE,
				allowNull: false,
        		comment: `date when user's login is suppoed to expire`
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('user_login');
	},
};
