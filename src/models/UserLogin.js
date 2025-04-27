import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
	const UserLogin = sequelize.define(
		'UserLogin',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			token: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			login_at: {
				type: DataTypes.DATE,
			},
			expires_at: {
				type: DataTypes.DATE,
			},
		},
		{
			tableName: 'user_login',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	
	return UserLogin;
};
