import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
	const ExpiredUrl = sequelize.define(
		'ExpiredUrl',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			og_url: {
				type: DataTypes.STRING(65535),
				allowNull: false,
			},
			url: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			expired_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
				refrences: {
					model: 'users',
					key: 'id',
				},
			},
			visits: {
				type: DataTypes.INTEGER,
			},
		},
		{
			tableName: 'expired_urls',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return ExpiredUrl;
};
