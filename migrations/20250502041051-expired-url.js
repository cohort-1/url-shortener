'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('expired_urls', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			og_url: {
				type: Sequelize.STRING(65535),
				allowNull: false,
			},
			url: {
				type: Sequelize.STRING(255),
				allowNull: false,
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
				references: {
					model: 'users',
					key: 'id',
				},
			},
			visits: {
				type: Sequelize.INTEGER,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('expired_urls');
	},
};
