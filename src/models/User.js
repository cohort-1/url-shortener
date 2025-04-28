import { DataTypes, Sequelize } from 'sequelize';
import Userhooks from "../hooks/user_hooks.js"
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
				type: DataTypes.STRING(120),
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
			reset_password_token: {
				type: DataTypes.STRING
			},
			reset_password_expiry: {
				type: DataTypes.DATE
			}
		},
		{
			tableName: 'users',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	Userhooks(User);
	return User;
};
