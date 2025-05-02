import { DataTypes, Sequelize } from 'sequelize';

export default (sequalise) => {
	const Url = sequalise.define(
		'Url',
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
				type: DataTypes.STRING(255),
			},
			expiry_date: {
				type: DataTypes.DATE,
				allowNull: true
			},
			user_id: {
				type: DataTypes.INTEGER,
				references: {
					model: 'users',
					key: 'id',
				},
			},
			visits: {
				type: DataTypes.INTEGER,
			},
		},
		{
			tableName: 'urls',
			timestamps: true,
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);
	return Url;
};
