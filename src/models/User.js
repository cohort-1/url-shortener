import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			last_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING(24),
				allowNull: false,
			},
			phone_number: {
				type: DataTypes.STRING(15),
			},
			country_code: {
				type: DataTypes.STRING(4),
			},
			is_paid: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			tableName: 'users',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return User;
};
