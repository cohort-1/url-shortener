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
				type: DataTypes.STRING,
				allowNull: false,
			},
			url: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			expiry_date: {
				type: DataTypes.DATE,
				allowNull: false,
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
